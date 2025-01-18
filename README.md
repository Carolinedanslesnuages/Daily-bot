# DailyBot 🤖

## Description

Ce projet est une application Node.js qui intègre un serveur web avec **Express.js** et un bot Discord utilisant la bibliothèque **Discord.js**. Le bot envoie des messages programmés dans un canal Discord à des horaires spécifiques, et il est aussi interactif avec les utilisateurs via des commandes.

Le code comporte deux parties principales :

1. **Serveur Web Express.js** : un serveur web simple qui sert des fichiers statiques et utilise le moteur de templates EJS.
2. **Bot Discord** : un bot qui interagit avec un serveur Discord, répond à certaines commandes et envoie des messages programmés.

---

## Fonctionnalités ✨

### Serveur Web Express.js

Le serveur web :
- Crée un serveur local qui sert des fichiers statiques (HTML, CSS, JS) depuis le dossier `public`.
- Utilise le moteur de templates **EJS** pour rendre des vues.
- Répond à une requête GET à la racine (`/`) en envoyant la vue `index`.

**Caractéristiques principales :**
- **Port d’écoute** : Par défaut sur le port `5000` ou un port spécifié via la variable d’environnement `PORT`.
- **Répertoire public** : Le dossier `public` contient les fichiers statiques servis par le serveur.
- **Vue principale** : Le serveur renvoie la vue `pages/index.ejs` lorsque l’utilisateur accède à la racine (`/`).

---

### Bot Discord

Le bot Discord :
- Utilise **discord.js** pour se connecter à un serveur Discord avec un jeton d’authentification (`TOKEN`).
- Interagit avec un canal spécifique (spécifié par la variable d’environnement `DAILY`) et envoie des messages à des heures définies.
  
**Commandes principales :**
1. **Commande `help`** : Affiche la liste des commandes disponibles pour le bot.
2. **Commande `hello DailyBot`** : Le bot répond à l’utilisateur qui mentionne cette commande avec un message personnalisé.

---

### Fonctionnalités de Cron ⏰

Le bot envoie des messages programmés dans un canal Discord à des horaires spécifiques chaque jour :
- **Tous les jours à 11h00** : Envoie un message indiquant que l’heure du “daily” est arrivée.
- **Tous les jours à 11h15** : Envoie un message indiquant que le “daily” est terminé.

Ces tâches sont gérées par la bibliothèque **node-cron**.

---

## Installation 🛠️

### Prérequis 

Avant d’exécuter ce projet, vous devez avoir les éléments suivants installés :
- **Node.js** : Assurez-vous d’avoir une version compatible de Node.js (v12 ou plus récent).
- **NPM** : NPM doit être installé avec Node.js.
- **Bot Discord** : Vous devez avoir créé un bot sur le [portail des développeurs Discord](https://discord.com/developers/applications) et obtenu un token d’authentification.

---

### Étapes d’installation

1. **Clonez le dépôt :**
    ```bash
    git clone https://github.com/Carolinedanslesnuages/Daily-bot.git
    cd Daily-bot
    ```

2. **Installez les dépendances :**
    ```bash
    npm install
    ```

3. **Configurez les variables d’environnement :**
    Créez un fichier `.env` à la racine de votre projet et ajoutez les lignes suivantes :
    ```env
    PORT=5000
    TOKEN=Votre_Token_Discord
    DAILY=ID_du_canal_Discord
    ```

4. **Lancez le serveur et le bot :**
    Exécutez la commande suivante pour démarrer le serveur Express et le bot Discord :
    ```bash
    node app.js
    ```
---

### Commandes du Bot

- **`help`** : Affiche la liste des commandes disponibles.
- **`hello DailyBot`** : Le bot répond en saluant l’utilisateur mentionnant cette commande.

---

### Fonctionnalités supplémentaires

- Le bot envoie des messages programmés dans un canal Discord à des moments définis chaque jour, par exemple à **11h00** et **11h15**.

---

## Technologies utilisées

- **Express.js** : Framework pour créer des serveurs web en Node.js.
- **Discord.js** : Bibliothèque pour interagir avec l’API Discord et créer des bots Discord.
- **node-cron** : Bibliothèque pour planifier des tâches cron dans Node.js.
- **dotenv** : Permet de charger les variables d’environnement à partir d’un fichier `.env`.

---

## Conclusion

Ce projet combine un serveur web simple avec un bot Discord interactif et un système de planification des messages. Il peut être facilement étendu pour ajouter plus de fonctionnalités et personnaliser le comportement du bot ou du serveur web selon vos besoins.
