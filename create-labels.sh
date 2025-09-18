#!/bin/bash
# Script complet pour créer tous les labels GitHub en français
# Basé sur la fusion de labels-francais.txt et ISSUES_TO_CREATE.md
# 
# Prérequis: avoir installé GitHub CLI (gh) et être authentifié
# Usage: chmod +x create-labels.sh && ./create-labels.sh

echo "🚀 Création de tous les labels GitHub en français..."
echo "📊 Total: 27 labels à créer"

# ============================================
# TECHNOLOGIES (3 labels)
# ============================================
echo "🔧 Création des labels technologies..."

gh label create "html" \
  --color "e34c26" \
  --description "Issues liées au HTML" \
  --force

gh label create "css" \
  --color "1572b6" \
  --description "Issues de style CSS" \
  --force

gh label create "javascript" \
  --color "f7df1e" \
  --description "Fonctionnalités JavaScript" \
  --force

# ============================================
# TYPES D'ISSUES (3 labels)
# ============================================
echo "📋 Création des labels types d'issues..."

gh label create "amélioration" \
  --color "84b6eb" \
  --description "Nouvelle fonctionnalité ou amélioration" \
  --force

gh label create "bug" \
  --color "d73a4a" \
  --description "Quelque chose ne fonctionne pas" \
  --force

gh label create "documentation" \
  --color "0075ca" \
  --description "Améliorations de documentation" \
  --force

# ============================================
# NIVEAUX DE DIFFICULTÉ (3 labels)
# ============================================
echo "🎚️ Création des labels niveaux de difficulté..."

gh label create "débutant" \
  --color "7057ff" \
  --description "Parfait pour les nouveaux contributeurs" \
  --force

gh label create "intermédiaire" \
  --color "fbca04" \
  --description "Niveau de difficulté intermédiaire" \
  --force

gh label create "avancé" \
  --color "d4c5f9" \
  --description "Niveau de difficulté avancé" \
  --force

# ============================================
# DOMAINES SPÉCIALISÉS (6 labels)
# ============================================
echo "🌐 Création des labels domaines spécialisés..."

gh label create "accessibilité" \
  --color "0366d6" \
  --description "Améliorations d'accessibilité" \
  --force

gh label create "performance" \
  --color "28a745" \
  --description "Optimisations de performance" \
  --force

gh label create "sécurité" \
  --color "b60205" \
  --description "Améliorations de sécurité" \
  --force

gh label create "seo" \
  --color "c2e0c6" \
  --description "Optimisation pour moteurs de recherche" \
  --force

gh label create "mobile" \
  --color "f9d0c4" \
  --description "Responsive et mobile" \
  --force

gh label create "git" \
  --color "f05032" \
  --description "Git et contrôle de version" \
  --force

# ============================================
# OUTILS ET PROCESSUS (4 labels)
# ============================================
echo "🔧 Création des labels outils et processus..."

gh label create "ci-cd" \
  --color "1d76db" \
  --description "Workflows d'intégration continue" \
  --force

gh label create "automatisation" \
  --color "0e8a16" \
  --description "Automatisation des processus" \
  --force

gh label create "tests" \
  --color "d876e3" \
  --description "Issues liées aux tests" \
  --force

gh label create "qualité-code" \
  --color "bfd4f2" \
  --description "Amélioration qualité du code" \
  --force

# ============================================
# DESIGN ET UX (3 labels)
# ============================================
echo "🎨 Création des labels design et UX..."

gh label create "design" \
  --color "e99695" \
  --description "Améliorations visuelles" \
  --force

gh label create "animation" \
  --color "f29513" \
  --description "Animations CSS/JS" \
  --force

gh label create "expérience-utilisateur" \
  --color "c5def5" \
  --description "Améliorations UX" \
  --force

# ============================================
# SPÉCIALISATIONS AVANCÉES (5 labels)
# ============================================
echo "🚀 Création des labels spécialisations avancées..."

gh label create "frameworks" \
  --color "ff6b6b" \
  --description "Frameworks frontend" \
  --force

gh label create "outils-dev" \
  --color "4ecdc4" \
  --description "Outils de développement" \
  --force

gh label create "backend" \
  --color "45b7d1" \
  --description "Sujets liés au backend" \
  --force

gh label create "expérience-dev" \
  --color "96ceb4" \
  --description "Amélioration expérience développeur" \
  --force

gh label create "débogage" \
  --color "ffa726" \
  --description "Guides et outils de débogage" \
  --force

# ============================================
# STATUTS ET WORKFLOW (1 label supplémentaire)
# ============================================
echo "🚦 Création des labels workflow..."

gh label create "aide-demandée" \
  --color "008672" \
  --description "Attention supplémentaire nécessaire" \
  --force

# ============================================
# RÉSUMÉ FINAL
# ============================================
echo ""
echo "✅ CRÉATION TERMINÉE !"
echo ""
echo "📊 Résumé des labels créés:"
echo "   🔧 Technologies: 3 labels (html, css, javascript)"
echo "   📋 Types: 3 labels (amélioration, bug, documentation)"
echo "   🎚️ Difficulté: 3 labels (débutant, intermédiaire, avancé)"
echo "   🌐 Domaines: 6 labels (accessibilité, performance, sécurité, seo, mobile, git)"
echo "   🔧 Processus: 4 labels (ci-cd, automatisation, tests, qualité-code)"
echo "   🎨 Design: 3 labels (design, animation, expérience-utilisateur)"
echo "   🚀 Avancé: 5 labels (frameworks, outils-dev, backend, expérience-dev, débogage)"
echo "   🚦 Workflow: 1 label (aide-demandée)"
echo ""
echo "🎯 Total: 28 labels créés avec succès !"
echo ""
echo "🚀 Votre repository est maintenant prêt pour le TP collaboratif !"
echo "📋 Vous pouvez maintenant créer les 50 issues avec les labels appropriés."
