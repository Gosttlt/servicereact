const { Router } = require('express')
const Appointment = require('../models/Appointment')
const auth = require('../middleware/auth.middleware')
const router = Router()


router.post('/', auth, async (req, res) => {

    try {
        const { date, service, model } = req.body

        const existing = await Appointment.findOne({ date })
        if (existing) {
            return res.json({ message: 'Данное время уже занято' })
        }

        const appointment = new Appointment({ date, service, model, owner: req.user.userId })
        await appointment.save()

        res.status(201).json({ date, service, model, dateCreate: appointment._id.getTimestamp().toISOString() })

    }
    catch (e) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте сново' })
    }

})

router.get('/', auth, async (req, res) => {
    try {

        let appointment = await Appointment.find({ owner: req.user.userId }).sort({ _id: -1 })
        let dateCreate = appointment.map(r => {
            r.dateCreate = r._id.getTimestamp().toISOString()
            return r
        })
        res.json({ data: dateCreate, status: 1 })
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