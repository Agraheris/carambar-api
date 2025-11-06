const express = require("express");
const router = express.Router();

const jokeController = require("../controllers/jokeController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       required:
 *         - question
 *         - answer
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-généré de la blague
 *           example: 1
 *         question:
 *           type: string
 *           description: La question de la blague
 *           example: "Quelle est la femelle du hamster ?"
 *         answer:
 *           type: string
 *           description: La réponse de la blague
 *           example: "L'Amsterdam"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de dernière modification
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Message d'erreur
 *           example: "Blague non trouvée"
 */

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Récupère toutes les blagues
 *     description: Retourne la liste complète de toutes les blagues disponibles
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/", jokeController.getAllJokes);

/**
 * @swagger
 * /jokes/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     description: Retourne une blague choisie aléatoirement parmi toutes les blagues disponibles
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Aucune blague disponible
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/random", jokeController.getRandomJoke);

/**
 * @swagger
 * /jokes/{id}:
 *   get:
 *     summary: Récupère une blague par son ID
 *     description: Retourne les détails d'une blague spécifique en fonction de son ID
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: ID numérique de la blague
 *         example: 1
 *     responses:
 *       200:
 *         description: Détails de la blague
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Blague non trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/:id", jokeController.getJokeById);

/**
 * @swagger
 * /jokes:
 *   post:
 *     summary: Crée une nouvelle blague
 *     description: Ajoute une nouvelle blague à la base de données
 *     tags: [Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer
 *             properties:
 *               question:
 *                 type: string
 *                 description: La question de la blague
 *                 example: "Pourquoi les plongeurs plongent toujours en arrière ?"
 *               answer:
 *                 type: string
 *                 description: La réponse de la blague
 *                 example: "Parce que sinon ils tombent dans le bateau"
 *     responses:
 *       201:
 *         description: Blague créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       400:
 *         description: Données invalides (question ou réponse manquante)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Erreur serveur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/", jokeController.createJoke);

module.exports = router;