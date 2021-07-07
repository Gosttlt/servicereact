const { Router } = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs') //хешировщик пароля
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator') //валидатор данных инпута


const router = Router()

router.post(
    '/register',
    [
        check('email', 'Не корректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
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
                return res.status(400).json({ message: 'Такой пользовотель уже существует' })
            }
            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({ email, password: hashedPassword })

            await user.save()

            res.status(201).json({ message: 'Пользвоатель создан' })

        } catch (error) {
            res.status(500).json({ message: 'Что то пошло не так, попробуйте сново' })
        }
    })

// router.post(
//     '/login',
//     [
//         check('email', 'Вверидте корректный email').normalizeEmail().isEmail(),
//         check('password', 'Вверидте пароль').exists()
//     ],
//     async (req, res) => {

//         try {
//             const errors = validationResult(req)

//             if (!errors.isEmpty()) {
//                 return res.status(400).json({
//                     errors: errors.array(),
//                     message: 'Не корректные данные при входе'
//                 })
//             }

//             const { email, password } = req.body

//             const user = await User.findOne({ email })

//             if (!user) {
//                 return res.status(400).json({ message: 'Пользователь не найден' })
//             }

//             const isMatch = await bcrypt.compare(password, user.password) // проверка за хешированного пороля с введенным
//             if (!isMatch) {
//                 return res.status(400).json({ message: 'Не верный логин или пароль, попробуйте снова' })
//             }

//             const token = jwt.sign(
//                 { userId: user.id },
//                 config.get('jwtSecret'),
//                 { expiresIn: '1h' }
//             )
//             res.json({ token, userId: user.id })
//         } catch (error) {
//             res.status(500).json({ message: 'Что то пошло не так, попробуйте сново login' })
//         }
//     })
router.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body
        console.log(req.body)
        let user = await User.findOne({ email })
        let isMatch = await bcrypt.compare(password, user.password)

        if (!user || !isMatch) {
            return res.json({ message: 'Не корректные данные', status: 0 })
        }
        res.json({ email: user.email, status: 1 })
    }
    catch (e) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте сново login', status: 0 })
    }
}
)

router.post('/test', async (req, res) => {
    try {
        let { email, password } = req.body

        let candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' })
        }
        let hashPassword = await bcrypt.hash(password, 12)

        let user = new User({ email, password: hashPassword })

        await user.save()

        res.status(201).json({ message: 'пользователь за регестрирован', status: 1 })
    }
    catch (e) {
        res.status(500).json({ message: 'Что то пошло не так, попробуйте сново' })
    }
})

module.exports = router