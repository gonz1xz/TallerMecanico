const { Router } = require('express')
const Dates = require('../models/date')
const Prices = require('../models/price')
const path = require('path')

const router = Router();


router.get('/', (req, res, next) => {
    res.redirect('/principal')
})

router.get('/principal', (req, res, next) => {
    res.render('home')
})

router.get('/agenda', async (req, res, next) => {
    try{
        const dates = await Dates.findAll()
        res.render('pageDates', {dates})
    }catch(e){
        console.error(e)
        next(e)
    }
})

router.get('/listadeprecios', async (req, res, next) => {
    try{
        const prices = await Prices.findAll()
        res.render('pricesList', { prices })
    }catch(e){
        console.error(e)
        next(e)
    }
})

module.exports = router;