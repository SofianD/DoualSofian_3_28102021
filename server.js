// IMPORT NODE DEP
const http = require('http');
const fs = require('fs');
const { join, extname } = require('path');

// IMPORT THIRD PARTY DEP
const sass = require('sass');

async function compile(targets = undefined) {
  const files = targets|| await fs.promises.readdir("sass");

  for (const fileName of files) {
    const ext = extname(fileName);

    if (ext === ".sass") {
      try {
        await fs.promises.mkdir("css", { recursive: true });

        const compiled = await sass.compileAsync(join("sass", fileName));

        const formatedfileName = join("css", fileName.replace(ext, ".css"));
        await fs.promises.writeFile(formatedfileName, compiled.css);
      } catch (error) {
        console.log(error)
      }
    }
  }

  return;
}

async function serverSASS(request, response) {
  if (extname(request.url) === ".html" || request.url === "/") {
    await compile();
  }

  fs.createReadStream(request.url.substring(1) || join('.', 'index.html')).pipe(response);

  return;
}

function runServer(port = undefined) {
  const server = http.createServer(serverSASS);

  const defaultPort = 8000;
  server.listen(port || defaultPort);

  console.log(`Server is running ${ port || defaultPort } `);
};

function main() {
  if (process.argv[2] === "--compile") {
    const targets = process.argv.slice(3);
    compile(targets.length > 0 ? targets.map(fileName => `${fileName}.sass`) : undefined);
  }
  else {
    const port = isNaN(Number(process.argv[2])) ? undefined : Number(process.argv[2]);
    runServer(port);
  }
}

main();
