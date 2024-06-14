const { DataTypes } = require("sequelize")
const sequelize = require("../db.js")


const Dates = sequelize.define('dates', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clientName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    car: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idPlate: {
        type: DataTypes.STRING,
        allowNull: false

    },
    descriptionJob: {
        type: DataTypes.STRING,
        allowNull: false
    },
    datatime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

},
    {
        timestamps: false
    }
)
module.exports = Dates;