const { Router } = require('express')
const { createDate, getDates, updateDate, deleteDate, getDatesStatus, getCheckDate } = require('../controllers/dates')

const router = Router()

// Traer las citas
router.get('/dates', getDates)

// Citas por estado
router.get('/dates/:status', getDatesStatus)

// Crear una cita
router.post('/dates', createDate)

// Modificar una cita, Modificar Patente o Descripcion
router.put('/dates/:id', updateDate)

// Modifica el estado
router.put('/dates/check/:id', getCheckDate)

// Eliminar una cita
router.delete('/dates/:id', deleteDate)



module.exports = router;
