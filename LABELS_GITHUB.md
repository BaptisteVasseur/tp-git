# 🏷️ Labels GitHub à créer

## 📋 Liste complète des 25 labels

### Script de création automatique avec GitHub CLI

```bash
#!/bin/bash
# Script pour créer tous les labels GitHub
# Prérequis: avoir installé GitHub CLI (gh) et être authentifié

echo "🚀 Création des labels GitHub pour le wiki collaboratif..."

# Technologies
gh label create "html" --color "e34c26" --description "HTML related issues"
gh label create "css" --color "1572b6" --description "CSS styling issues"  
gh label create "javascript" --color "f7df1e" --description "JavaScript functionality"

# Types d'issues (enhancement existe déjà par défaut)
gh label create "documentation" --color "0075ca" --description "Documentation improvements"

# Niveaux de difficulté
gh label create "intermediate" --color "fbca04" --description "Intermediate difficulty level"
gh label create "advanced" --color "d4c5f9" --description "Advanced difficulty level"

# Domaines spécialisés
gh label create "accessibility" --color "0366d6" --description "Accessibility improvements"
gh label create "performance" --color "28a745" --description "Performance optimizations"
gh label create "security" --color "b60205" --description "Security improvements"
gh label create "seo" --color "c2e0c6" --description "Search engine optimization"
gh label create "mobile" --color "f9d0c4" --description "Mobile responsiveness"

# Outils et processus
gh label create "ci-cd" --color "1d76db" --description "CI/CD workflows"
gh label create "automation" --color "0e8a16" --description "Process automation"
gh label create "testing" --color "d876e3" --description "Testing related issues"
gh label create "code-quality" --color "bfd4f2" --description "Code quality improvements"

# Design et UX
gh label create "design" --color "e99695" --description "Visual design improvements"
gh label create "animation" --color "f29513" --description "CSS/JS animations"
gh label create "ux" --color "c5def5" --description "User experience improvements"

# Statuts et workflow
gh label create "priority-high" --color "d73a4a" --description "High priority issue"
gh label create "priority-low" --color "0e8a16" --description "Low priority issue"
gh label create "blocked" --color "6f42c1" --description "Blocked by dependencies"

# Spécialisations avancées
gh label create "frameworks" --color "ff6b6b" --description "Frontend frameworks"
gh label create "tooling" --color "4ecdc4" --description "Development tools"
gh label create "backend" --color "45b7d1" --description "Backend related topics"
gh label create "developer-experience" --color "96ceb4" --description "Developer experience improvements"
gh label create "debugging" --color "ffa726" --description "Debugging guides and tools"

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
| `html` | `#e34c26` | HTML related issues |
| `css` | `#1572b6` | CSS styling issues |
| `javascript` | `#f7df1e` | JavaScript functionality |

### 📋 Types d'issues
| Nom | Couleur | Description |
|-----|---------|-------------|
| `enhancement` | `#84b6eb` | New feature or improvement (défaut GitHub) |
| `bug` | `#d73a4a` | Something isn't working (défaut GitHub) |
| `documentation` | `#0075ca` | Documentation improvements |

### 🎚️ Niveaux de difficulté
| Nom | Couleur | Description |
|-----|---------|-------------|
| `good first issue` | `#7057ff` | Good for newcomers (défaut GitHub) |
| `intermediate` | `#fbca04` | Intermediate difficulty level |
| `advanced` | `#d4c5f9` | Advanced difficulty level |

### 🌐 Domaines spécialisés
| Nom | Couleur | Description |
|-----|---------|-------------|
| `accessibility` | `#0366d6` | Accessibility improvements |
| `performance` | `#28a745` | Performance optimizations |
| `security` | `#b60205` | Security improvements |
| `seo` | `#c2e0c6` | Search engine optimization |
| `mobile` | `#f9d0c4` | Mobile responsiveness |

### 🔧 Outils et processus
| Nom | Couleur | Description |
|-----|---------|-------------|
| `ci-cd` | `#1d76db` | CI/CD workflows |
| `automation` | `#0e8a16` | Process automation |
| `testing` | `#d876e3` | Testing related issues |
| `code-quality` | `#bfd4f2` | Code quality improvements |

### 🎨 Design et UX
| Nom | Couleur | Description |
|-----|---------|-------------|
| `design` | `#e99695` | Visual design improvements |
| `animation` | `#f29513` | CSS/JS animations |
| `ux` | `#c5def5` | User experience improvements |

### 🚦 Statuts et workflow
| Nom | Couleur | Description |
|-----|---------|-------------|
| `help wanted` | `#008672` | Extra attention is needed (défaut GitHub) |
| `priority-high` | `#d73a4a` | High priority issue |
| `priority-low` | `#0e8a16` | Low priority issue |
| `blocked` | `#6f42c1` | Blocked by dependencies |

### 🚀 Spécialisations avancées
| Nom | Couleur | Description |
|-----|---------|-------------|
| `frameworks` | `#ff6b6b` | Frontend frameworks |
| `tooling` | `#4ecdc4` | Development tools |
| `backend` | `#45b7d1` | Backend related topics |
| `developer-experience` | `#96ceb4` | Developer experience improvements |
| `debugging` | `#ffa726` | Debugging guides and tools |

## 🎯 Utilisation des labels

### Pour les étudiants débutants
- `good first issue` + `html`/`css`/`javascript`
- `documentation`
- `design`

### Pour les étudiants intermédiaires  
- `intermediate` + technologie
- `performance`
- `mobile`
- `testing`

### Pour les étudiants avancés
- `advanced` + spécialisation
- `frameworks`
- `backend`
- `ci-cd`
- `security`

## 📊 Statistiques finales

- **Total : 25 labels personnalisés**
- **Labels GitHub par défaut conservés :** `enhancement`, `bug`, `good first issue`, `help wanted`
- **Nouveaux labels créés :** 21
- **Palette de couleurs cohérente** pour une navigation visuelle intuitive

---

💡 **Conseil :** Utilisez le script bash pour créer tous les labels en une seule fois !
