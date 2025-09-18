# 📚 Wiki de Classe - TP Collaboratif Git/GitHub

Bienvenue dans notre wiki collaboratif ! Ce projet a pour objectif de vous faire pratiquer Git et GitHub dans un contexte réaliste.

## 🎯 Objectifs pédagogiques

- Maîtriser les bases de Git (clone, fork, branch, commit, push, pull)
- Travailler avec des issues GitHub
- Faire des pull requests et des reviews de code
- Gérer les conflits de merge
- Utiliser les conventions de commits
- Découvrir les workflows CI/CD

## 🚀 Mise en route

### 1. Fork et Clone
1. **Fork** ce repository sur votre compte GitHub
2. **Clone** votre fork localement :
```bash
git clone https://github.com/VOTRE-USERNAME/tp-git.git
cd tp-git
```

### 2. Configuration Git
Configurez votre identité Git si ce n'est pas déjà fait :
```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

Oubliez pas d'enregistrer votre clé SSH sur votre compte github et de renseigner également votre clé GPG pour signer vos commits. (voir cours)

## 📋 Convention de travail

### 🌿 Nommage des branches
- `feature/nom-de-la-fonctionnalite` - Pour ajouter du nouveau contenu
- `bugfix/nom-du-bug` - Pour corriger un bug
- `hotfix/nom-du-hotfix` - Pour des corrections urgentes

**Exemples :**
- `feature/page-html`
- `feature/page-css`
- `bugfix/correction-typo-accueil`

### 💬 Messages de commits
Utilisez les **Conventional Commits** ou les **Gitmoji** :

**Conventional Commits :**
- `feat:` - Nouvelle fonctionnalité
- `fix:` - Correction de bug
- `docs:` - Documentation
- `style:` - Formatage, style
- `refactor:` - Refactorisation

**Gitmoji (optionnel) :**
- ✨ `:sparkles:` - Nouvelle fonctionnalité
- 🐛 `:bug:` - Correction de bug
- 📝 `:memo:` - Documentation
- 💄 `:lipstick:` - Style/UI
- ♻️ `:recycle:` - Refactorisation

**Exemples de bons commits :**
```
feat: ajouter page sur les bases HTML
fix: corriger le lien vers la page CSS
docs: mettre à jour le README avec les nouvelles règles
✨ ajouter section sur JavaScript
🐛 corriger l'affichage du menu de navigation
```

## 🏗️ Structure du projet

```
tp-git/
├── README.md
├── index.html              # Page d'accueil
├── css/
│   └── style.css          # Styles globaux
├── pages/
│   ├── html-basics.html   # Page sur les bases HTML
│   ├── css-guide.html     # Guide CSS
│   ├── js-intro.html      # Introduction JavaScript
│   └── ...                # Vos contributions !
├── assets/
│   └── images/            # Images du wiki
```

## 📝 Comment contribuer

### Étape 1 : Choisir une issue
1. Consultez les [Issues](../../issues) disponibles
2. Assignez-vous à une issue libre
3. Commentez l'issue pour indiquer que vous travaillez dessus

### Étape 2 : Créer une branche
```bash
# Assurez-vous d'être sur main et à jour
git checkout main
git pull

# Créez votre branche
git checkout -b feature/ma-nouvelle-page
```

### Étape 3 : Développer
1. Créez ou modifiez les fichiers nécessaires
2. Testez votre code dans le navigateur
3. Faites des commits atomiques et clairs

```bash
git add .
git commit -m "feat: ajouter page sur les bases HTML"
```

### Étape 4 : Pull Request
1. Poussez votre branche :
```bash
git push origin feature/ma-nouvelle-page
```

2. Ouvrez une Pull Request sur GitHub
3. Décrivez clairement vos modifications
4. Liez votre PR à l'issue correspondante (ex: `Fonctionnalité #5`)

### Étape 5 : Review
- Attendez qu'un autre étudiant review votre code
- Répondez aux commentaires et faites les modifications demandées
- Une fois approuvée, votre PR sera mergée !

## 👥 Rôles et responsabilités

### 🧑‍💻 Contributeurs (15 étudiants)
- Créer du contenu (pages HTML, styles CSS)
- Faire des reviews de code
- Participer aux discussions dans les issues

### 🔧 Mainteneurs (5 étudiants)
- Valider et merger les Pull Requests
- Créer et gérer les issues
- Maintenir la qualité du code
- Gérer les conflits et les releases

## 🚫 Gitignore

Les fichiers suivants sont ignorés :
- Fichiers temporaires de l'OS (`.DS_Store`, `Thumbs.db`)
- Fichiers d'éditeurs (`.vscode/`, `.idea/`)
- Logs et fichiers de debug
- Fichiers de build

## 🆘 En cas de problème

### Conflits de merge
1. Récupérez les dernières modifications :
```bash
git fetch upstream
git rebase upstream/main
```

2. Résolvez les conflits manuellement
3. Continuez le rebase :
```bash
git add .
git rebase --continue
```

### Besoin d'aide ?
- Ouvrez une issue avec le label `help wanted`
- Demandez de l'aide sur le channel Discord de la classe
- Consultez la [documentation Git](https://git-scm.com/doc)

## 🎉 C'est parti !

Choisissez votre première issue et commencez à contribuer ! 

N'oubliez pas : l'objectif est d'apprendre ensemble, alors n'hésitez pas à poser des questions et à aider vos camarades. 

**Happy coding! 🚀**

---

*Dernière mise à jour : 18 septembre 2025*
