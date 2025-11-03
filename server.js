const app = require('./src/app');
const sequelize = require('./src/config/database');

const PORT = process.env.PORT || 3000;


const startServer = async () => {
  try {

    await sequelize.sync({ force: false }); 
    console.log('✅ Base de données synchronisée');
    

    app.listen(PORT, () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
      console.log(`📝 Teste l'API : http://localhost:${PORT}/blagues`);
    });
  } catch (error) {
    console.error('❌ Erreur de démarrage:', error);
  }
};

startServer();