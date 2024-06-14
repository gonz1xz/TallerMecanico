const { Sequelize } = require("sequelize");
const { dbdata } = require("./config");

const sequelize = new Sequelize(dbdata.dbName, dbdata.dbUser, dbdata.dbPassword, {
    dialect: 'postgres',
    host: dbdata.dbHost,
    port: dbdata.dbPort
})

module.exports = sequelize;