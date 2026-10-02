# SécuriFeu — site vitrine

Site de démonstration responsive pour une entreprise de protection incendie. Il est réalisé en HTML, CSS et JavaScript natifs : aucune dépendance, compilation ou installation n'est nécessaire.

## Avant publication

Remplace les informations d'exemple dans les fichiers HTML et `assets/js/main.js` :

- `SécuriFeu` : nom de l'entreprise ;
- `01 99 00 00 00` et `+33199000000` : téléphone ;
- `contact@example.com` (notamment dans `assets/js/main.js`) : adresse de réception ;
- `Votre ville et sa région` : adresse ou zone d'intervention ;
- horaires, textes de prestations et mentions légales : informations réelles de l'entreprise.

Vérifie que les prestations et affirmations décrites correspondent bien aux services réellement proposés. Ajoute les mentions légales requises avant la mise en ligne.

## Formulaire de contact

Le formulaire vérifie les champs dans le navigateur puis ouvre le logiciel de messagerie du visiteur avec un e-mail prérempli. Le site ne transmet ni ne stocke les réponses. Il faut remplacer `contact@example.com` dans `assets/js/main.js` par l'adresse de l'entreprise.

Pour recevoir les demandes sans dépendre du logiciel de messagerie du visiteur, il faudra connecter le formulaire à un service de formulaires ou à un backend.

## Aperçu local

Ouvre `index.html` dans un navigateur. Pour tester les liens et les pages, tu peux aussi démarrer un serveur statique depuis ce dossier, par exemple :

```sh
python3 -m http.server 8000
```

Puis ouvre `http://localhost:8000`.

## Publication sur GitHub Pages

1. Décompresse l'archive et copie le contenu de `securifeu-site/` à la racine de ton dépôt (le fichier `index.html` doit se trouver à la racine).
2. Envoie les fichiers sur GitHub.
3. Dans le dépôt, ouvre **Settings → Pages**.
4. Choisis le déploiement depuis la branche principale et le dossier `/ (root)`, puis enregistre.
5. GitHub Pages affichera l'adresse publique du site dans cette page de réglages.

Le site n'utilise pas de serveur et son formulaire ne peut pas envoyer directement les messages tant qu'il n'est pas relié à un service dédié.
