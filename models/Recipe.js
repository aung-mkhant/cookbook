const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const Recipe = sequelize.define(
    'Recipe',
    {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: "Awesome recipe.",
            // allowNull defaults to true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ingredients: {
            type: DataTypes.TEXT,
            allowNull: false,
            get() {
                // Convert to array when sending data to client
                // return this.getDataValue.split(/, |,/);
            }
        },
        instructions: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }
);


// (async () => {
// }
// )()


module.exports = Recipe


