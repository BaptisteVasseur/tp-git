---
name: 📖 Documentation
about: Améliorer la documentation du projet
title: "[DOCS] "
labels: documentation
assignees: ''

---

## 📚 Quelle documentation améliorer ?
Précisez quelle partie de la documentation nécessite une amélioration.

## 🎯 Objectif de l'amélioration
Pourquoi cette amélioration documentaire est-elle nécessaire ?

## 📝 Contenu suggéré
Décrivez le contenu que vous souhaitez ajouter ou modifier.

## 📋 Tâches à réaliser
- [ ] Rechercher les informations nécessaires
- [ ] Rédiger le contenu
- [ ] Relire et corriger
- [ ] Tester les exemples de code (si applicable)

## 📍 Fichiers concernés
Listez les fichiers de documentation à créer ou modifier.

---
**Type :** README / Guide / Exemple / Autre


# 1. Créer le projet
gh project create --title "Wiki Collaboratif TP" --body "Suivi Kanban des contributions étudiantes"

# 2. Lier au repository (remplacez PROJECT_NUMBER par le numéro affiché)
gh project link PROJECT_NUMBER

# 3. Ajouter toutes les issues
gh issue list --json number | jq -r '.[] | .number' | xargs -I {} gh project item-add 2 --url https://github.com/baptistevasseur/tp-git/issues/{}
