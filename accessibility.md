# 🌐 Cours Complet : Accessibilité Web

Bienvenue dans ce cours sur **l’accessibilité web**.
Que vous soyez **débutant** ou **développeur confirmé**, vous trouverez ici les bases indispensables et des pistes pour aller plus loin.

---

## 🎯 Objectifs du cours

À l’issue de ce module, vous serez capable de :

- Comprendre **pourquoi** l’accessibilité est essentielle (éthique, légale, expérience utilisateur).
- Connaître et appliquer les **principes WCAG** pour rendre vos sites accessibles.
- Utiliser correctement les **ARIA labels et rôles**.
- Mettre en place une **navigation au clavier** efficace.
- Tester l’accessibilité de vos pages avec des **outils dédiés**.
- Adopter les **bonnes pratiques** au quotidien dans vos projets.

---

## 1️⃣ Principes WCAG

Les **Web Content Accessibility Guidelines (WCAG)** sont des recommandations internationales du W3C.
Elles reposent sur **4 grands principes**, faciles à retenir grâce à l’acronyme **POUR** :

| Principe                      | Signification                                                                                        | Exemples concrets                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **P – Perceptible**           | Le contenu doit pouvoir être perçu, quelle que soit la capacité sensorielle.                         | Texte alternatif pour les images, contrastes suffisants, sous-titres pour les vidéos.         |
| **O – Utilisable (Operable)** | La navigation et les interactions doivent être faisables par tout le monde.                          | Navigation **au clavier**, focus visible, éviter les éléments clignotants.                    |
| **U – Compréhensible**        | Les informations et l’interface doivent être simples à comprendre.                                   | Langage clair, messages d’erreur explicites, indication de la langue dans `<html lang="fr">`. |
| **R – Robuste**               | Le code doit être compatible avec différents navigateurs et lecteurs d’écran, aujourd’hui et demain. | HTML valide, utilisation correcte des rôles ARIA.                                             |

### Niveaux de conformité

- **A** : exigences de base (minimum vital).
- **AA** : niveau recommandé (standard professionnel).
- **AAA** : niveau avancé (le plus exigeant).

💡 **Conseil pratique** : visez au minimum le **niveau AA** dans vos projets.

---

## 2️⃣ ARIA labels et rôles

Les attributs **ARIA** (_Accessible Rich Internet Applications_) complètent le HTML pour décrire les éléments aux technologies d’assistance.

### Principaux attributs

- `role` : définit le rôle de l’élément (`button`, `navigation`, `dialog`).
- `aria-label` : ajoute une description textuelle invisible mais lue par le lecteur d’écran.
- `aria-labelledby` : relie un élément à un titre existant.
- `aria-hidden="true"` : exclut un élément de la lecture.

### Exemple

```html
<!-- Mauvais : un lien ressemble à un bouton -->
<a onclick="envoyerFormulaire()">Envoyer</a>

<!-- Meilleur : un vrai bouton -->
<button type="submit">Envoyer</button>

<!-- Si on ne peut pas changer la balise -->
<a role="button" aria-label="Envoyer le formulaire">Envoyer</a>
```

⚠️ **Règle d’or** : privilégiez **le HTML sémantique** avant d’utiliser ARIA.

---

## 3️⃣ Navigation au clavier

Une personne qui ne peut pas utiliser une souris doit pouvoir naviguer **uniquement au clavier**.

### Bonnes pratiques

- Tous les éléments interactifs doivent être accessibles via **Tab** / **Shift + Tab**.
- Le **focus** (élément actuellement sélectionné) doit être **visible**.
- L’ordre de tabulation doit suivre une logique naturelle (de haut en bas, de gauche à droite).

### Exemple CSS pour un focus visible

```css
button:focus,
a:focus {
  outline: 3px solid #005fcc; /* Couleur bien contrastée */
}
```

---

## 4️⃣ Outils de test accessibilité

Pour garantir l’accessibilité, testez régulièrement votre site.

| Outil                                                                | Type                 | Utilisation                                                |
| -------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------- |
| **[Lighthouse](https://developers.google.com/web/tools/lighthouse)** | Audit automatique    | Intégré à Chrome/Edge (`F12 > Audits`).                    |
| **[axe DevTools](https://www.deque.com/axe/)**                       | Extension navigateur | Rapports détaillés sur les problèmes WCAG.                 |
| **[Wave](https://wave.webaim.org/)**                                 | Service en ligne     | Analyse rapide en collant l’URL.                           |
| **NVDA** (Windows) / **VoiceOver** (macOS)                           | Lecteurs d’écran     | Test de l’expérience utilisateur réelle.                   |
| **Color Contrast Checker**                                           | Vérificateur         | Vérifie le ratio de contraste entre texte et arrière-plan. |

💡 Testez **avec un lecteur d’écran** même si vous n’êtes pas en situation de handicap : c’est le meilleur moyen de comprendre les obstacles.

---

## 5️⃣ Bonnes pratiques

### Pour le contenu

- Rédiger des textes **clairs et simples**.
- Hiérarchiser avec des **titres logiques** (`<h1>` puis `<h2>`, etc.).
- Fournir des **textes alternatifs** pertinents pour toutes les images.

### Pour la mise en page

- Vérifier les **contrastes** (ratio minimum 4.5:1 pour le texte normal).
- Ne pas transmettre une information uniquement par la couleur (ex : « champs obligatoires en rouge »).

### Pour les formulaires

- Associer chaque champ à un **label** (`<label for="email">Email</label>`).
- Fournir des **messages d’erreur explicites** (ex. : “Adresse email invalide” plutôt que “Erreur”).

### Pour le code

- Utiliser un **HTML sémantique** (`<main>`, `<nav>`, `<button>`, `<section>`).
- Valider votre code avec le [W3C Validator](https://validator.w3.org/).

---

_Dernière mise à jour : 19 septembre 2025_
