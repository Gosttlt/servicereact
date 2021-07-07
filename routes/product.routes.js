const { Router } = require('express')
const Product = require('../models/Product')

const router = Router()

router.get('/company', async (req, res) => {
    let data = await Product.findOne ({name: 'company'})
    res.json(data)
})
router.get('/device', async (req, res) => {
    let data = await Product.findOne({name: 'device'})
    res.json(data)
})

router.get('/models', async (req, res) => {
    let data = await Product.findOne({name: 'models'})
    res.json(data)
})


module.exports = router