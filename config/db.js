const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/cookbook.db'
});

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');
    }
    catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}
connectToDatabase()

module.exports = sequelize