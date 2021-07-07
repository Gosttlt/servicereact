const { Router } = require('express')
const Model = require('../models/Model')

const router = Router()


router.post('/', async (req, res) => {
    let model = req.body.model;
    let data = await Model.find({model})
    res.json(data)
})


module.exports = router