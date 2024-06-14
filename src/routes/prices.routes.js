const { Router } = require('express')
const { getPrices, createPrice, updatePrice, deletePrice } = require('../controllers/prices')

const router = Router()

// Traer precios
router.get('/prices', getPrices)

// Crear una presupuesto
router.post('/prices', createPrice)

// Modificar presupuesto
router.put('/prices/:id', updatePrice)

// Eliminar una presupuesto
router.delete('/prices/:id', deletePrice)



module.exports = router;