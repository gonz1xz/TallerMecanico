const { DataTypes } = require("sequelize")
const sequelize = require("../db.js")


const Prices = sequelize.define('prices', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descriptionJob: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    }

},
    {
        timestamps: false
    }
)
module.exports = Prices;