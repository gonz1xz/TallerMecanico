const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const dateRoutes = require('./routes/dates.routes')
const pagesRoutes = require('./routes/pages.routes')
const pricesRoutes = require('./routes/prices.routes')
const engine = require('ejs-mate');
const path = require('path')


const port = process.env.PORT || 3000;

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Configuración
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(pagesRoutes)
app.use(dateRoutes)
app.use(pricesRoutes)

app.use((req, res) => {
    res.status(404).send('404')
})

async function main() {
    try {
        await sequelize.sync({ force: false });
        console.log("Connection has been established successfully")
        app.listen(port, () => {
            console.log("Servidor Funcionando - Puerto 3000")
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error)
        throw error
    }
}


main();
