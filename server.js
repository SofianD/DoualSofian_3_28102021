// IMPORT NODE DEP
const http = require('http');
const fs = require('fs');
const { join, extname } = require('path');

// IMPORT THIRD PARTY DEP
const sass = require('sass');

async function compileOnly() {
  const files = await fs.promises.readdir("sass");

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

function runServer() {
  const server = http.createServer(sassCompiler);

  server.listen(8080);
  console.log('Server is running 8080');
};

async function sassCompiler(request, response) {
  if (extname(request.url) === ".html" || request.url === "/") {
    const files = await fs.promises.readdir("sass");

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
  }

  fs.createReadStream(request.url.substring(1) || join('.', 'index.html')).pipe(response);

}

if (process.argv[2] === "--compile") {
  compileOnly();
}
else {
  runServer();
}
