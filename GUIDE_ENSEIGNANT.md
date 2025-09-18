# 🎓 Guide de mise en place - Enseignant

## 📋 Checklist de préparation

### 1. 🚀 Création du repository GitHub

- [ ] Créer un nouveau repository public sur GitHub nommé `wiki-classe` 
- [ ] Pusher le code local vers GitHub :
```bash
git remote add origin https://github.com/VOTRE-USERNAME/wiki-classe.git
git push -u origin main
git push origin v0.1.0
```

### 2. 🔧 Configuration GitHub

- [ ] Activer GitHub Pages dans Settings > Pages > Source: GitHub Actions
- [ ] Créer les labels personnalisés (voir `ISSUES_TO_CREATE.md`)
- [ ] Créer un milestone "v1.0.0 - Wiki Complet" 
- [ ] Ajouter une description du repository

### 3. 📝 Création des issues

- [ ] Créer les 20 issues listées dans `ISSUES_TO_CREATE.md`
- [ ] Assigner les labels appropriés
- [ ] Lier les issues au milestone

### 4. 👥 Organisation des étudiants

#### Mainteneurs (5 étudiants)
- [ ] Désigner 5 étudiants comme mainteneurs
- [ ] Leur donner les droits "Maintain" sur le repository
- [ ] Leur expliquer leur rôle de review et merge

#### Contributeurs (15 étudiants)  
- [ ] Expliquer le processus de fork/clone
- [ ] Faire une démonstration de création de branche
- [ ] Montrer comment s'assigner une issue

## 🎯 Déroulé du TP (séances suggérées)

### Séance 1 : Introduction (2h)
1. **Présentation Git/GitHub (30min)**
   - Concept de versioning
   - Workflow collaboratif
   
2. **Setup individuel (45min)**
   - Chaque étudiant fork le repository
   - Clone local et configuration Git
   - Exploration de la structure
   
3. **Première contribution (45min)**
   - Choix d'une issue "good first issue"
   - Création de branche
   - Premier commit et push

### Séance 2 : Développement (3h)
1. **Développement des contributions (2h)**
   - Travail sur les issues assignées
   - Commits atomiques et messages clairs
   
2. **Pull Requests (45min)**
   - Création des PR
   - Description et liaison aux issues
   
3. **Code Review (15min)**
   - Processus de review entre étudiants
   - Commentaires constructifs

### Séance 3 : Collaboration avancée (2h)
1. **Gestion des conflits (45min)**
   - Résolution de merge conflicts
   - Rebase vs merge
   
2. **Fonctionnalités avancées (45min)**
   - Cherry-pick
   - Tags et releases
   
3. **Workflow final (30min)**
   - Release v1.0.0
   - Retour d'expérience

## 📊 Évaluation suggérée

### Critères d'évaluation (100 points)

- **Contribution technique (40pts)**
  - [ ] Issue complétée (20pts)
  - [ ] Code de qualité (10pts) 
  - [ ] Respect des conventions (10pts)

- **Collaboration Git (40pts)**
  - [ ] Messages de commits clairs (10pts)
  - [ ] Workflow Git correct (15pts)
  - [ ] Pull Request bien documentée (10pts)
  - [ ] Gestion des conflits (5pts)

- **Collaboration communautaire (20pts)**
  - [ ] Code review utile (10pts)
  - [ ] Aide aux autres étudiants (5pts)
  - [ ] Participation aux discussions (5pts)

### Bonus possibles (+10pts)
- [ ] Contribution extra (issue supplémentaire)
- [ ] Amélioration de la CI/CD
- [ ] Création d'outils utiles pour le projet

## 🔧 Outils et ressources

### Documentation à partager
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Gitmoji](https://gitmoji.dev/)

### Extensions VS Code utiles
- GitLens
- GitHub Pull Requests and Issues
- Live Server (pour tester les pages HTML)

### Commandes Git essentielles à enseigner
```bash
# Configuration
git config --global user.name "Nom"
git config --global user.email "email@example.com"

# Workflow de base
git clone <url>
git checkout -b feature/ma-branche
git add .
git commit -m "feat: description"
git push origin feature/ma-branche

# Mise à jour
git fetch upstream
git rebase upstream/main

# Résolution de conflits
git status
git add .
git rebase --continue
```

## 🚨 Problèmes courants et solutions

### Students bloqués sur le setup
- **Solution :** Sessions de setup en groupe
- **Prévention :** Tester les instructions sur plusieurs OS

### Conflits de merge fréquents
- **Solution :** Enseigner le rebase régulier
- **Prévention :** Organiser les contributions par zones

### Messages de commits peu clairs
- **Solution :** Templates et exemples
- **Prévention :** Validation automatique via hooks

### Pull Requests mal documentées
- **Solution :** Template de PR obligatoire
- **Prévention :** Exemples de bonnes PR

## 📅 Planning suggéré

| Semaine | Activité | Issues ciblées |
|---------|----------|----------------|
| 1 | Setup + premières contributions | #1, #2, #6 (good first issue) |
| 2 | Développement principal | #3-5, #7-12 |
| 3 | Features avancées | #13-15, #19-20 |
| 4 | Bugfix et améliorations | #16-18 |
| 5 | Finalisation et release | Toutes restantes |

## 🎉 Points d'attention pour la réussite

### ✅ Bonnes pratiques
- Démonstrations live plutôt que théorie
- Travail en binômes pour les débutants
- Célébrer les premières contributions mergées
- Utiliser les émojis Git pour rendre ça fun

### ⚠️ Pièges à éviter
- Ne pas tout expliquer d'un coup
- Laisser les étudiants expérimenter
- Ne pas ignorer les étudiants en difficulté
- Prévoir du temps supplémentaire pour les conflits

---

**🚀 Le wiki est prêt, que le TP commence !**

*N'hésitez pas à adapter ce guide selon vos besoins et votre contexte pédagogique.*
