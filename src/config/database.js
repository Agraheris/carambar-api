const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à la base de données réussie');
  } catch (error) {
    console.error('❌ Impossible de se connecter à la base de données:', error);
  }
};

testConnection();

module.exports = sequelize;