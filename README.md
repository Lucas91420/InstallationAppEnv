# Mon Projet Node.js / React

Ce projet met en place un environnement de développement **Node.js / React** conforme à des bonnes pratiques professionnelles :

1. **Tests unitaires** (via Jest)  
2. **Documentation automatique** (via JSDoc)  
3. **Convention de commits** (Commitlint + Husky)  
4. **Linter** (ESLint, config Airbnb)  
5. **Webpack** (pour Babel, SASS, React, hot reload)  
6. **SASS** pour gérer les styles  
7. **Commandes NPM** pour faciliter l’utilisation

-   **`npm run dev`** : Démarre l’appli en mode développement (hot reload).
-   **`npm run prod`** : Lance les tests, puis build de production (fichiers dans `dist/`).
-   **`npm run test`** : Exécute les tests Jest avec couverture.
-   **`npm run lint`** : Vérifie le code avec ESLint (Airbnb).
-   **`npm run doc`** : Génère la documentation JSDoc.

---

## 1. Prérequis

- **Node.js** 22
- **npm** 
- **Git** (pour la gestion du code source et les hooks Husky)

---

## 2. Installation

```bash
# 1. Cloner ce dépôt
git clone https://github.com/<VotrePseudo>/<NomDuProjet>.git
cd <NomDuProjet>
```
### 2.1 Installer les dépendances
```bash
npm install
```
* Lance Webpack Dev Server sur `http://localhost:3000`. * Active le hot reload (le navigateur se met à jour automatiquement dès qu’on modifie le code). * Exécute en temps réel ESLint pour signaler les éventuelles erreurs de code.

## 3) Scripts disponibles

### 3.1. Démarrage en mode développement
  ```bash
 npm run dev
 ```
 
-   Lance **Webpack Dev Server** sur `http://localhost:3000`.
-   Active le **hot reload** (le navigateur se met à jour automatiquement dès qu’on modifie le code).
-   Exécute en temps réel **ESLint** pour signaler les éventuelles erreurs de code.
- 
 ### 3.2 Build de productio
 ```bash
 npm run prod
 ```
 Exécute les tests (npm test) pour s’assurer que tout est OK.
Compile le code en mode production (bundling + minification).
Génére les fichiers optimisés dans le dossier dist/.

### 3.3 Lint
 ```bash
 npm run lint
  ```
  Lance ESLint (avec la config Airbnb).
Détecte les problèmes de style et de qualité de code.

### 3.4. Tests unitaires
 ```bash
 npm run test
  ```
  Exécute Jest (ou Mocha, selon votre choix).
Affiche la couverture de test dans le terminal.
Les tests sont généralement placés dans __tests__

### 3.5. Documentation
 ```bash
 npm run doc
  ```
  Génère la documentation JSDoc dans le dossier docs/.
Les commentaires JSDoc dans src/ seront convertis en pages HTML consultables via un navigateur.

##  4) Structure du projet
 ```bash
 mon-projet/
 ┣━ dist/               # Dossier de build (prod)
 ┣━ docs/               # Documentation générée par JSDoc
 ┣━ src/
 ┃   ┣━ index.js        # Point d'entrée (React, Sass, etc.)
 ┃   ┣━ App.js          # Composant principal (exemple)
 ┃   ┣━ __tests__/      # Tests unitaires Jest
 ┃   ┗━ styles/
 ┃       ┗━ main.scss   # Fichier Sass principal
 ┣━ .babelrc            # Config Babel (preset-env, preset-react)
 ┣━ .eslintrc.js        # Config ESLint (règles Airbnb, etc.)
 ┣━ commitlint.config.js # Config commitlint pour la convention de commits
 ┣━ jsdoc.config.json   # Config JSDoc
 ┣━ webpack.config.js   # Config Webpack (entry, output, loaders, devServer)
 ┣━ package.json        # Script NPM, dépendances
 ┣━ README.md           # Vous êtes ici
 ┗━ .husky/             # Hooks git (pré-commit, commit-msg...) gérés par Husky
  ```

##  5) Convention de commits

Le projet utilise Husky et commitlint pour faire respecter la convention Conventional Commits. Les principaux types de commits sont :
* feat : ajout d’une nouvelle fonctionnalité.
* fix : correction d’un bug.
* docs : modifications de documentation.
* chore : tâches annexes (maintenance, mise à jour de dépendances, etc.).
* refactor : modifications de code qui n’ajoutent pas de fonctionnalité ni ne corrigent un bug.

 ```bash
 git commit -m "feat: ajout de la page de login"
  ```
##  6) Linter (ESLint) et norme Airbnb
Le linter est configuré pour :
* Analyser le code JavaScript/React.
* Appliquer les règles Airbnb pour un style de code cohérent.
* Désactiver ou ajuster certaines règles si nécessaire dans eslint.config.js

 ```bash
 npm run lint
  ```
##  7) Tests unitaires (Jest)
Les tests se situent dans le dossier __tests__ (ou tests/). Chaque fichier .test.js ou .spec.js contient une suite de tests.
Exemple de test :
 ```bash
 function sum(a, b) {
  return a + b;
}

test('1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});


npm run test
  ```
Vous obtiendrez un tableau de couverture en fin de log.

##  8) Documentation (JSDoc)
Le projet génère de la documentation automatique grâce à JSDoc. Les commentaires de vos fonctions et modules doivent suivre le format JSDoc :
   ```bash
 /**
 * Additionne deux nombres
 * @param {number} a Premier nombre
 * @param {number} b Deuxième nombre
 * @return {number} La somme
 */
export function sum(a, b) {
  return a + b;
}



npm run doc
  ```
  Un dossier docs/ sera créé, contenant des fichiers HTML consultables via un navigateur.

##  9) Webpack (Dev Server, Babel, SASS)
* Entrée : src/index.js
* Sortie : dist/bundle.js
* SASS compilé par sass-loader, css-loader, style-loader.
* Babel (avec @babel/preset-env et @babel/preset-react) pour transpiler ES6+/JSX.
* Dev Server : accessible via npm run dev sur http://localhost:3000.
* Hot Reload : Rechargement automatique du code en dev.

## 10) Contribution

1. Forker ou cloner le repo.
2. Créer une branche pour votre fonctionnalité/bugfix.
3. S’assurer que les tests passent (npm run test) et le code est propre (npm run lint).
4. Respecter la convention de commit (ex : feat: ajout d'une fonctionnalité).
5. Pousser votre branche et soumettre une Pull Request.

## 11) Licence 

Ce projet est distribué sous la licence **MIT**

## 12) Support 

-   Ouvrez une **issue** sur GitHub si vous rencontrez un problème.
-   Contactez l’équipe de développement pour des questions spécifiques.
