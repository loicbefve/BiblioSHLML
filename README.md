# BiblioSHLML

## Description :
Site de recherche dans les différents corpus documentaires de la bibliothèque de la Société d'Histoire de la Lorraine et du musée Lorrain.

## Prérequis :
*Les versions indiquées sont indicatives, ils s'agit des versions avec lesquelles
l'application a été développé. L'application peut fonctionner avec des versions supérieures
cependant cela n'est pas garanti.*
- Node.js (v18.17.0)
- Yarn (v1.22.19)

## Setup :
*Cette section décrit comment lancer le projet dans votre environnement de développement*

1. Commencer par installer les dépendances du projet :  
   ```bash
   yarn install
   ```
2. Si tout s'est bien passé, vous devriez être capable de lancer l'application en mode développement.
   ```bash
   yarn run dev
   ```

Félicitations, vous pouvez maintenant accéder à l'application. Vraissemblablement à l'adresse `http://localhost:5173`.

:warning: Afin que l'application fonctionne correctement, il est nécessaire d'avoir également l'API lancée en local et 
de configurer le fichier `.env.developement` avec les informations de connexion à l'API. Un fichier `.env.example` est disponible
pour vous aider à configurer votre fichier `.env.local`. Ne commitez jamais votre fichier `.env.local` dans le dépôt.

Vous pouvez trouver le back-end de ce site ici : [BiblioAPI](https://github.com/loicbefve/BiblioAPI) 

## Déploiement :

Le déploiement se fait via le workflow GitHub Actions `📦 Deploy Biblio frontend`
(`.github/workflows/deploy.yml`), déclenché manuellement.

:warning: `VITE_API_URL` est **compilée dans le bundle au moment du build**. Modifier
le secret GitHub ne suffit pas : il faut relancer le workflow de déploiement pour que
la nouvelle valeur soit prise en compte.

### API en same-origin

Le site étant servi en HTTPS, une `VITE_API_URL` en `http://` est bloquée par le
navigateur (*mixed content*) : les appels ne partent même pas. Pour éviter
définitivement ce problème, l'API est exposée par nginx sur la **même origine** que le
front, sous le préfixe `/api` :

- secrets GitHub `PROD_BACKEND_URL` et `DEV_BACKEND_URL` : `/api`
- configuration nginx du serveur : voir `docs/nginx.conf.example`

Le navigateur reprend alors automatiquement le scheme et le domaine de la page, ce qui
supprime à la fois le risque de *mixed content* et le besoin de CORS.
