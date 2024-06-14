const Dates = require('../models/date')

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

const getDates = async (req, res) => {
    try {
        const dates = await Dates.findAll()
        res.json(dates)
    }catch(e){
        return res.status(500).json({meesage: e.message})
    }
}


const getDatesStatus = async (req, res) => {
    const {status} = req.body
    try {
        const dates = await Dates.findAll({
            where: {
                done: status
            }
        })
        res.json(dates)
    }catch(e){
        return res.status(500).json({meesage: e.message})
    }
}

const getCheckDate = async (req, res) => {

    try{
        const { id } = req.params
        const changesDate = await Dates.findByPk(id)
        if(changesDate.done == true){
            changesDate.done = false
        }else{
            changesDate.done = true
        }

        await changesDate.save()

        res.json(changesDate)
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}



const createDate = async (req, res) => {
    const { clientName, car, idPlate, descriptionJob } = req.body

    let timeCreation = new Date()
    let datatime = `${days[timeCreation.getDay()]} - ${timeCreation.getDate()} - ${months[timeCreation.getMonth()]} - ${timeCreation.getFullYear()}`

    try {
        const newProject = await Dates.create({
            clientName,
            car,
            idPlate,
            descriptionJob,
            datatime,
            done: false
        })
        res.json(newProject)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deleteDate = async (req, res) => {
    const {id} = req.params
    try{
        await Dates.destroy({
            where: {
                id
            }
        })
        res.sendStatus(204)
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

const updateDate = async (req, res) => {
    try{
        const { clientName, car, idPlate, descriptionJob} = req.body
        const { id } = req.params
        const changesDate = await Dates.findByPk(id)
        if(clientName) changesDate.clientName = clientName
        if(car) changesDate.car = car
        if(idPlate) changesDate.idPlate = idPlate
        if(descriptionJob) changesDate.descriptionJob = descriptionJob

        await changesDate.save()

        res.json(changesDate)
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

module.exports = { getDates, createDate, deleteDate, updateDate, getDatesStatus, getCheckDate}