const { Router } = require('express')
const Appointment = require('../models/Appointment')
const auth = require('../middleware/auth.middleware')
const router = Router()


router.post('/appointment', auth, async (req, res) => {
    try {
        const { date, service } = req.body
        const existing = Appointment.findOne({ date })

        if (existing) {
            return res.json({ message: 'Данное время уже занято' })
        }
        const appointment = new Appointment({ date, service, owner: req.user.userId })
        await appointment.save()
        res.status(201).json({ appointment })

    }
    catch (e) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте сново' })
    }

})

router.get('/appointment', auth, async (req, res) => {
    try {

        const appointment = await Appointment.find({ owner: req.user.userId })
        res.json(appointment)
    }
    catch (e) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте сново' })
    }
})
router.get('/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id)
        res.json(appointment)
    }
    catch (e) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте сново' })
    }
})


module.exports = router