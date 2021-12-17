# OhMyFood!
Projet 3 de la formation développeur web Open Classrooms.

```bash
$ git clone https://github.com/SofianD/DoualSofian_3_28102021.git
```
> Le CSS a été généré à partir de fichiers SASS.

## **Boutons**
### Au survol, la couleur de fond des boutons principaux devra légèrement s’éclaircir. L’ombre portée devra également être plus visible.
```css
/* CSS */
.btn {
  box-shadow: 0 4px 12px #bdbdbd;
}

.btn:hover {
  box-shadow: 0 4px 20px 5px #808080;
  filter: brightness(115%);
}
```
---
### À terme, les visiteurs pourront sauvegarder leurs menus préférés. Pour ça, un bouton "J’aime" en forme de cœur est présent sur la maquette. Au clic, il devra se remplir progressivement. Pour cette première version, l’effet peut être apparaître ausurvol sur desktop au lieu du clic.

Utilisation de la bibliothèque d'icones [Font Awesome](https://fontawesome.com/).
```html
<!-- HTML -->
<div class="container">
  <i class="far fa-heart"></i>
  <i class="fas fa-heart"></i>
</div>
```
```css
/* CSS */
.container {
  width: 22px;
  height: 22px;
}

.container i {
  color: #5c5c5c;
  font-size: 22px;
  cursor: pointer;
  position: absolute;
  z-index: 1000;
  transition: .2s ease-out;
}

.fas {
  opacity: 0;
  background: rgb(147,86,220);
  background: -moz-linear-gradient(210deg, rgba(147,86,220,1) 20%, rgba(255,121,218,1) 100%);
  background: -webkit-linear-gradient(210deg, rgba(147,86,220,1) 20%, rgba(255,121,218,1) 100%);
  background: linear-gradient(210deg, rgba(147,86,220,1) 20%, rgba(255,121,218,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9356dc",endColorstr="#ff79da",GradientType=1);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transform: scale(0);
}

.container:hover .fas {
  opacity: 1;
  transform: scale(1);
}

.container:hover .far {
  background: rgb(147,86,220);
  background: -moz-linear-gradient(210deg, rgba(147,86,220,1) 20%, rgba(255,121,218,1) 100%);
  background: -webkit-linear-gradient(210deg, rgba(147,86,220,1) 20%, rgba(255,121,218,1) 100%);
  background: linear-gradient(210deg, rgba(147,86,220,1) 20%, rgba(255,121,218,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9356dc",endColorstr="#ff79da",GradientType=1);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

## **Page d'accueil**
### Simuler un "loading spinner" de 3 secondes qui couvre intégralement l'écran.
```html
<!-- HTML -->
<div id="container">
  <div id="false-header">
    <img src="./assets/images/logo/ohmyfood.png" alt="">
  </div>
  <div id="spinner"></div>
</div>
```
```css
/* CSS */
#container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5000;
  display: flex;
  animation: closeSpinner .4s ease-in 3s forwards;
  background: rgb(147,86,220);
  background: -moz-linear-gradient(0deg, rgba(147,86,220,1) 0%, rgba(255,121,218,1) 100%);
  background: -webkit-linear-gradient(0deg, rgba(147,86,220,1) 0%, rgba(255,121,218,1) 100%);
  background: linear-gradient(0deg, rgba(147,86,220,1) 0%, rgba(255,121,218,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9356dc",endColorstr="#ff79da",GradientType=1);
}

#spinner {
  color: white;
  font-size: 90px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: auto;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: duplicate 1.7s infinite ease, turn 1.7s infinite ease;
  animation: duplicate 1.7s infinite ease, turn 1.7s infinite ease;
}

#false-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 200px;
  animation: resizeFalseHeader 1s ease-in-out 2.2s forwards;
}
#false-header img {
  max-width: 300px;
  margin: auto;
  filter: invert(100%);
  animation: resizeFalseHeaderImg 1s ease-in-out 2s forwards;
}

@keyframes resizeFalseHeader {
  0% {
    height: 200px;
  }
  100% {
    height: 60px;
  }
}
@keyframes resizeFalseHeaderImg {
  0% {
    max-width: 300px;
  }
  100% {
    max-width: 150px;
    filter: invert(0%);
  }
}

@keyframes duplicate {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%, 95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%, 59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}

@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes closeSpinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: collapse;
  }
}
```

## **Pages de menu**
### Les plats devront apparaître progressivement avec un léger décalage dans le temps.
```html
<!-- HTML -->
<div class="container">
  <div class="list-element"></div>
  <div class="list-element"></div>
  <div class="list-element"></div>
  <div class="list-element"></div>
  <div class="list-element"></div>
</div>
```

```scss
/* SASS */
@for $i from 1 through 10
  .container .list-element:nth-child(#{$i})
    animation: fondu .3s ease-out #{$i}00ms forwards, slide .7s ease-out #{$i}00ms forwards
```
```css
/* CSS */
.container .list-element:nth-child(1) {
  animation: fondu 0.3s ease-out 100ms forwards, slide 0.7s ease-out 100ms forwards;
}

.container .list-element:nth-child(2) {
  animation: fondu 0.3s ease-out 200ms forwards, slide 0.7s ease-out 200ms forwards;
}

/* ... */

.container .list-element:nth-child(10) {
  animation: fondu 0.3s ease-out 1000ms forwards, slide 0.7s ease-out 1000ms forwards;
}
```

---

### Le visiteur peut ajouter les plats qu'il souhaite à sa commande et cela fait apparaître une petite coche à droite du plat.
```html
<!-- HTML -->
<div class="section-menu">
  <h2>DESSERTS</h2>
  <div class="green-bar"></div>
  <div class="list-menu">
    <div class="card">
      <div class="card-flex">
        <div class="card-title">
          <p>Paris-Brest</p>
          <p>Revisité</p>
        </div>
        <div class="card-price">
          <p>18€</p>
        </div>
        <div class="card-selected">
          <i class="fas fa-check-circle"></i>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-flex">
        <div class="card-title">
          <p>Macaron au chocolat d'exception</p>
          <p>Et glace à la vanille de Madagascar</p>
        </div>
        <div class="card-price">
          <p>22€</p>
        </div>
        <div class="card-selected">
          <i class="fas fa-check-circle"></i>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-flex">
        <div class="card-title">
          <p>Mousse au chocolat</p>
          <p>Au piment d'Espelette et à la truffe noire</p>
        </div>
        <div class="card-price">
          <p>23€</p>
        </div>
        <div class="card-selected">
          <i class="fas fa-check-circle"></i>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
.list-menu {
  display: flex;
  flex-direction: column;
}
.list-menu .card {
  transform: translate(0, 20px);
  opacity: 0;
  background-color: white;
  box-shadow: 0 4px 12px #bdbdbd;
  border-radius: 15px;
  overflow: hidden;
  min-height: 60px;
  margin: 7px 0;
}
.list-menu .card .card-flex {
  display: flex;
  flex-wrap: nowrap;
  min-height: 65px;
  border-radius: 15px;
  width: calc(100% + 60px);
  transition: 0.5s;
  cursor: pointer;
}
.list-menu .card .card-flex .card-title {
  padding: 11px 0 11px 10px;
  margin-right: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: calc(100% - 110px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.list-menu .card .card-flex .card-title p {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list-menu .card .card-flex .card-title p:nth-child(1) {
  font-weight: bold;
  font-size: 17px;
}
.list-menu .card .card-flex .card-price {
  width: 60px;
  min-width: 60px;
  text-align: center;
  display: flex;
}
.list-menu .card .card-flex .card-price p {
  margin: auto;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px;
}
.list-menu .card .card-flex .card-selected {
  background-color: #99E2D0;
  width: 60px;
  min-width: 60px;
  display: flex;
}
.list-menu .card .card-flex .card-selected > * {
  margin: auto;
  color: white;
  font-size: 20px;
  transform-origin: center;
}
.list-menu .card .card-flex:hover {
  width: 100%;
}

.card-flex:hover .card-selected i {
  animation: rotateCheck 0.4s ease-in forwards;
}

.card-flex:hover .card-title {
  width: calc(100% - 140px);
}
```

# **Server.js**
Ce script a uniquement pour but d'aider au développement en compilant automatiquement les fichiers SASS lors du chargement d'un fichier HTML.

Installation des dépendances:
```bash
$ npm ci
```

## Lancer le serveur
Le serveur se lance sur le port 8000 par défaut:
```bash
$ npm run start
```

Pour lancer le serveur sur un port personnalisé:
```bash
$ npm run start 3000
```

## Compiler des fichiers sans lancer le serveur
Compile les fichiers présents dans le dossier **'./sass'**.
```bash
$ npm run compile
```

Il est possible de compiler certains fichiers en précisant leurs noms (sans l'extension):
```bash
$ npm run compile mon_premier_fichier mon_second_fichier
```
