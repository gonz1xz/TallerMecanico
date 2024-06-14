const Prices = require('../models/price')


const getPrices = async (req, res) => {
    try {
        const dates = await Prices.findAll()
        res.json(dates)
    }catch(e){
        return res.status(500).json({meesage: e.message})
    }
}

const createPrice = async (req, res) => {
    const { price, descriptionJob } = req.body

    try {
        const newProject = await Prices.create({
            descriptionJob,
            price
        })
        res.json(newProject)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const deletePrice = async (req, res) => {
    const {id} = req.params
    try{
        await Prices.destroy({
            where: {
                id
            }
        })
        res.sendStatus(204)
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

const updatePrice = async (req, res) => {
    try{
        const { id } = req.params
        const { price, descriptionJob} = req.body
        const changesPrice = await Prices.findByPk(id)

        if(price) changesPrice.price = price
        if(descriptionJob) changesPrice.descriptionJob = descriptionJob
        await changesPrice.save()

        res.json(changesPrice)
    }catch(e){
        return res.status(500).json({message: e.message})
    }
}

module.exports = { getPrices, createPrice, updatePrice, deletePrice}