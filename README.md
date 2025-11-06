# 🍬 Carambar API - Backend

API REST de blagues Carambar pour le projet de sélection CDA Wild Code School.

## 📋 Description

Application backend qui gère une collection de blagues Carambar avec un CRUD et une documentation Swagger interactive.

## 🛠️ Stack technique

- **Runtime** : Node.js v20+
- **Framework** : Express.js
- **Base de données** : SQLite + Sequelize ORM
- **Architecture** : MVC (Model-View-Controller)
- **Tests** : Jest + Supertest
- **Documentation** : Swagger (OpenAPI 3.0)

## 🚀 Installation et lancement

### Prérequis
- Node.js 20+ installé
- npm ou yarn

### Installation
```bash
# Cloner le repo
git clone https://github.com/Agraheris/carambar-api.git
cd carambar-api

# Installer les dépendances
npm install

# Initialiser la base de données avec les blagues
node seed.js
```

### Lancement
```bash
# Mode développement (avec nodemon)
npm run dev

# Mode production
npm start

# Tests
npm test
```

Le serveur démarre sur **http://localhost:3000**

## 📡 Endpoints API

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/jokes` | Récupère toutes les blagues |
| GET | `/jokes/:id` | Récupère une blague par ID |
| GET | `/jokes/random` | Récupère une blague aléatoire |
| POST | `/jokes` | Crée une nouvelle blague |

### Exemples de requêtes

**GET /jokes**
```bash
curl http://localhost:3000/jokes
```

**POST /jokes**
```bash
curl -X POST http://localhost:3000/jokes \
  -H "Content-Type: application/json" \
  -d '{"question":"Pourquoi les poissons n'\''aiment pas le tennis ?","answer":"Parce qu'\''ils ont peur du filet"}'
```

## 📚 Documentation Swagger

La documentation interactive de l'API est disponible à :
- **Local** : http://localhost:3000/api-docs
- **Production** : [À venir]

Swagger permet de :
- Consulter tous les endpoints
- Tester l'API directement depuis le navigateur
- Voir les schémas de données et exemples

## 🧪 Tests
```bash
npm test
```

7 tests couvrent les fonctionnalités principales :
- GET /jokes (liste complète)
- GET /jokes/:id (blague spécifique)
- GET /jokes/999 (erreur 404)
- GET /jokes/random (blague aléatoire)
- POST /jokes (création valide)
- POST /jokes sans question (erreur 400)
- POST /jokes sans réponse (erreur 400)

## 📁 Structure du projet
```
carambar-api/
├── src/
│   ├── config/
│   │   ├── database.js      # Configuration Sequelize
│   │   └── swagger.js       # Configuration Swagger
│   ├── controllers/
│   │   └── jokeController.js
│   ├── models/
│   │   └── Joke.js
│   ├── routes/
│   │   └── jokes.js
│   └── app.js               # Configuration Express
├── tests/
│   └── jokes.test.js        # Tests Jest
├── server.js                # Point d'entrée
├── seed.js                  # Script de seed BDD
└── package.json
```

## 🌐 Déploiement

**API déployée sur** : [Render.com - À venir]

**Frontend associé** : [GitHub Pages - À venir]

## 👨‍💻 Auteur

**Clément** - Projet de sélection CDA Wild Code School 2025

## 📝 Licence

Projet éducatif - Wild Code School
