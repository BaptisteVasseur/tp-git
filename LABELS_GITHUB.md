# 🏷️ Labels GitHub à créer

## 📋 Liste complète des 25 labels

### Script de création automatique avec GitHub CLI

```bash
#!/bin/bash
# Script pour créer tous les labels GitHub en français
# Prérequis: avoir installé GitHub CLI (gh) et être authentifié

echo "🚀 Création des labels GitHub pour le wiki collaboratif..."

# Technologies
gh label create "html" --color "e34c26" --description "Issues liées au HTML"
gh label create "css" --color "1572b6" --description "Issues de style CSS"  
gh label create "javascript" --color "f7df1e" --description "Fonctionnalités JavaScript"

# Types d'issues
gh label create "amélioration" --color "84b6eb" --description "Nouvelle fonctionnalité ou amélioration"
gh label create "bug" --color "d73a4a" --description "Quelque chose ne fonctionne pas"
gh label create "documentation" --color "0075ca" --description "Améliorations de documentation"

# Niveaux de difficulté
gh label create "débutant" --color "7057ff" --description "Parfait pour les nouveaux contributeurs"
gh label create "intermédiaire" --color "fbca04" --description "Niveau de difficulté intermédiaire"
gh label create "avancé" --color "d4c5f9" --description "Niveau de difficulté avancé"

# Domaines spécialisés
gh label create "accessibilité" --color "0366d6" --description "Améliorations d'accessibilité"
gh label create "performance" --color "28a745" --description "Optimisations de performance"
gh label create "sécurité" --color "b60205" --description "Améliorations de sécurité"
gh label create "référencement" --color "c2e0c6" --description "Optimisation pour moteurs de recherche"
gh label create "mobile" --color "f9d0c4" --description "Responsive et mobile"

# Outils et processus
gh label create "ci-cd" --color "1d76db" --description "Workflows d'intégration continue"
gh label create "automatisation" --color "0e8a16" --description "Automatisation des processus"
gh label create "tests" --color "d876e3" --description "Issues liées aux tests"
gh label create "qualité-code" --color "bfd4f2" --description "Amélioration qualité du code"

# Design et UX
gh label create "design" --color "e99695" --description "Améliorations visuelles"
gh label create "animation" --color "f29513" --description "Animations CSS/JS"
gh label create "expérience-utilisateur" --color "c5def5" --description "Améliorations UX"

# Statuts et workflow
gh label create "aide-demandée" --color "008672" --description "Attention supplémentaire nécessaire"
gh label create "priorité-haute" --color "d73a4a" --description "Issue prioritaire"
gh label create "priorité-basse" --color "0e8a16" --description "Issue de faible priorité"
gh label create "bloqué" --color "6f42c1" --description "Bloqué par des dépendances"

# Spécialisations avancées
gh label create "frameworks" --color "ff6b6b" --description "Frameworks frontend"
gh label create "outils-dev" --color "4ecdc4" --description "Outils de développement"
gh label create "backend" --color "45b7d1" --description "Sujets liés au backend"
gh label create "expérience-dev" --color "96ceb4" --description "Amélioration expérience développeur"
gh label create "débogage" --color "ffa726" --description "Guides et outils de débogage"

echo "✅ Tous les labels ont été créés avec succès !"
```

## 📝 Création manuelle (interface GitHub)

Si vous préférez créer les labels manuellement via l'interface GitHub :

1. Allez dans **Settings** > **Labels** de votre repository
2. Cliquez sur **New label** pour chaque label ci-dessous
3. Copiez le nom, la couleur et la description

### 🎯 Technologies
| Nom | Couleur | Description |
|-----|---------|-------------|
| `html` | `#e34c26` | Issues liées au HTML |
| `css` | `#1572b6` | Issues de style CSS |
| `javascript` | `#f7df1e` | Fonctionnalités JavaScript |

### 📋 Types d'issues
| Nom | Couleur | Description |
|-----|---------|-------------|
| `amélioration` | `#84b6eb` | Nouvelle fonctionnalité ou amélioration |
| `bug` | `#d73a4a` | Quelque chose ne fonctionne pas |
| `documentation` | `#0075ca` | Améliorations de documentation |

### 🎚️ Niveaux de difficulté
| Nom | Couleur | Description |
|-----|---------|-------------|
| `débutant` | `#7057ff` | Parfait pour les nouveaux contributeurs |
| `intermédiaire` | `#fbca04` | Niveau de difficulté intermédiaire |
| `avancé` | `#d4c5f9` | Niveau de difficulté avancé |

### 🌐 Domaines spécialisés
| Nom | Couleur | Description |
|-----|---------|-------------|
| `accessibilité` | `#0366d6` | Améliorations d'accessibilité |
| `performance` | `#28a745` | Optimisations de performance |
| `sécurité` | `#b60205` | Améliorations de sécurité |
| `référencement` | `#c2e0c6` | Optimisation pour moteurs de recherche |
| `mobile` | `#f9d0c4` | Responsive et mobile |

### 🔧 Outils et processus
| Nom | Couleur | Description |
|-----|---------|-------------|
| `ci-cd` | `#1d76db` | Workflows d'intégration continue |
| `automatisation` | `#0e8a16` | Automatisation des processus |
| `tests` | `#d876e3` | Issues liées aux tests |
| `qualité-code` | `#bfd4f2` | Amélioration qualité du code |

### 🎨 Design et UX
| Nom | Couleur | Description |
|-----|---------|-------------|
| `design` | `#e99695` | Améliorations visuelles |
| `animation` | `#f29513` | Animations CSS/JS |
| `expérience-utilisateur` | `#c5def5` | Améliorations UX |

### 🚦 Statuts et workflow
| Nom | Couleur | Description |
|-----|---------|-------------|
| `aide-demandée` | `#008672` | Attention supplémentaire nécessaire |
| `priorité-haute` | `#d73a4a` | Issue prioritaire |
| `priorité-basse` | `#0e8a16` | Issue de faible priorité |
| `bloqué` | `#6f42c1` | Bloqué par des dépendances |

### 🚀 Spécialisations avancées
| Nom | Couleur | Description |
|-----|---------|-------------|
| `frameworks` | `#ff6b6b` | Frameworks frontend |
| `outils-dev` | `#4ecdc4` | Outils de développement |
| `backend` | `#45b7d1` | Sujets liés au backend |
| `expérience-dev` | `#96ceb4` | Amélioration expérience développeur |
| `débogage` | `#ffa726` | Guides et outils de débogage |

## 🎯 Utilisation des labels

### Pour les étudiants débutants
- `débutant` + `html`/`css`/`javascript`
- `documentation`
- `design`

### Pour les étudiants intermédiaires  
- `intermédiaire` + technologie
- `performance`
- `mobile`
- `tests`

### Pour les étudiants avancés
- `avancé` + spécialisation
- `frameworks`
- `backend`
- `ci-cd`
- `sécurité`

## 📊 Statistiques finales

- **Total : 25 labels personnalisés**
- **Labels GitHub par défaut conservés :** `enhancement`, `bug`, `good first issue`, `help wanted`
- **Nouveaux labels créés :** 21
- **Palette de couleurs cohérente** pour une navigation visuelle intuitive

---

💡 **Conseil :** Utilisez le script bash pour créer tous les labels en une seule fois !
