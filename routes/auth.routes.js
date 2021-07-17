const { Router } = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs') //хешировщик пароля
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator') //валидатор данных инпута


const router = Router()

router.post(
    '/login',
    [
        check('email', 'Введите корректный e-mail').isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Не корректные данные при входе в систему',
                    status: 0
                })
            }
            let { email, password } = req.body

            let user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ message: 'Не верный e-mail или пароль1', status: 0 })
            }
            let isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.json({ message: 'Не верный e-mail или password', status: 0 })
            }
            const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), { expiresIn: '1h' })
            res.json({
                status: 1,
                payload: { token: token, userId: user.id, email }
            })
        }
        catch (e) {
            res.status(500).json({ message: 'Что то пошло не так, попробуйте сново login', status: 0 })
        }
    }
)

router.post(
    '/register',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Не корректные данные при регистрации'
                })
            }
            const { email, password } = req.body

            const candidate = await User.findOne({ email })

            if (candidate) {
                return res.status(400).json({ message: 'Такой пользователь уже существует', status: 0 })
            }
            const hashPassword = await bcrypt.hash(password, 12)

            const user = new User({ email, password: hashPassword })

            await user.save()

            res.status(201).json({ message: 'пользователь зарегестрирован', status: 1, email: user.email })
        }
        catch (e) {
            res.status(500).json({ message: 'Что то пошло не так, попробуйте сново' })
        }
    })

module.exports = router