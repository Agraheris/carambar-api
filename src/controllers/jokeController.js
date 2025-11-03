const Joke = require('../models/Joke'); 


const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll(); 
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

const getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id); 
    
    if (!joke) {
      return res.status(404).json({ error: 'Blague non trouvée' });
    }
    
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

const createJoke = async (req, res) => {
  try {
    const { question, answer } = req.body;
    
    if (!question || !answer) {
      return res.status(400).json({ error: 'Question et réponse requises' });
    }
    
    const newJoke = await Joke.create({ question, answer });
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};


const getRandomJoke = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    
    if (jokes.length === 0) {
      return res.status(404).json({ error: 'Aucune blague disponible' });
    }
    
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    
    res.json(randomJoke);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

module.exports = {
  getAllJokes,
  getJokeById,
  createJoke,
  getRandomJoke
};