# ICONS — Guide d'utilisation

Ce document explique comment utiliser le système d'icônes SVG du wiki.

## Principe

Nous utilisons un sprite SVG (`assets/icons/sprite.svg`) contenant plusieurs symboles `<symbol id="...">`.
Un script (`assets/js/icons.js`) injecte le sprite inline au chargement pour permettre le styling via CSS. Depuis une page située dans `pages/`, utilisez les chemins relatifs `../assets/js/icons.js` et `../assets/icons/sprite.svg`.

## Classes principales

- `.icon` : classe de base pour insérer une icône.
- `.icon--sm|--md|--lg` : tailles.
- `.icon--primary|--secondary|--success|--error|--muted` : couleurs thématiques (utilise `currentColor`).
- `.nav-icon` : petit espace entre icône et texte dans la nav.

## Exemples d'utilisation

HTML (dans une page) :

```html
<!-- Exemple : icône dans un lien de nav (après injection du sprite, utilisez le fragment #id) -->
<a href="/pages/index.html">
  <svg class="icon icon--md nav-icon icon--primary" aria-hidden="true">
    <use href="#icon-home"></use>
  </svg>
  Accueil
</a>

<!-- Icône d'état -->
<span class="icon icon--md icon--success" aria-hidden="true">
  <svg class="icon"><use href="#icon-success"></use></svg>
</span>
```

> Remarque : si le script `assets/js/icons.js` est présent, le sprite sera injecté inline et vous devez utiliser `#icon-id` dans `use` (ex: `<use href="#icon-home">`) après injection. Si vous ne pouvez pas injecter inline, vous pouvez référencer le sprite externe par chemin absolu ou relatif (ex: `/assets/icons/sprite.svg#icon-id` ou `../assets/icons/sprite.svg#icon-id` selon la structure), mais le fragment `#icon-id` est la méthode recommandée.

## Accessibilité

- Ajoutez `aria-hidden="true"` aux icônes purement décoratives.
- Pour icônes porteuses de sens, utilisez `<svg role="img" aria-label="Description">`.

## Fallbacks

- Si le sprite externe n'est pas accessible, fournissez un texte alternatif ou une image `<img>`.

## Bonnes pratiques

- Utilisez `currentColor` (défini via `color`) pour pouvoir recolorer facilement les icônes.
- Privilégiez l'injection inline (script) pour permettre le ciblage CSS des symboles.

---

Guide généré automatiquement — modifiez selon vos besoins.
