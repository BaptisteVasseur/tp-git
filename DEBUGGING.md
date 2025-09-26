# Guide des Techniques de Débogage

## Méthodes Console
- `console.log()` : Affichage basique
- `console.warn()` : Messages d'avertissement
- `console.error()` : Messages d'erreur
- `console.table()` : Données en format tableau
- `console.trace()` : Information de trace d'appel

## Breakpoints
1. Breakpoints Simple
    - Cliquer sur le numéro de ligne dans l'IDE
    - Utiliser l'instruction `debugger` dans le code

2. Breakpoints Conditionnels
    - S'arrête uniquement si la condition est vraie
    - Clic droit sur le numéro de ligne pour définir la condition

## Outils de Développement (DevTools)
### Panel Sources
- Exécution pas à pas du code
- Surveillance des variables
- Vérification de la pile d'appels
- Modification du code à la volée

### Panel Réseau
- Surveillance des requêtes HTTP
- Vérification des statuts de réponse
- Analyse des temps de réponse
- Visualisation des en-têtes et données

### Panel Éléments
- Inspection du DOM
- Modification HTML/CSS en temps réel
- Vérification des propriétés des éléments

### Panel Application
- Inspection du stockage
- Vérification du cache
- Gestion des service workers

### Panel Performance
- Profilage de l'exécution du code
- Analyse des goulots d'étranglement
- Surveillance de l'utilisation mémoire

## Bonnes Pratiques
1. Utiliser des messages console descriptifs
2. Supprimer le code de débogage avant la production
3. Utiliser les source maps
4. Garder les DevTools ouverts pendant le développement
5. Apprendre les raccourcis clavier