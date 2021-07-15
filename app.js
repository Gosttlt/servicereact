const express = require('express')
const config = require('config') // экспорт переменных из файла конфиг
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true })) // что бы парсить пост запросы из бади в json
app.use('/api/auth', require('./routes/auth.routes')) // подключаем роут на регистрацию
app.use('/api/product', require('./routes/product.routes')) // подключаем роут
app.use('/api/modelsv', require('./routes/modelsv.routes')) // подключаем роут
app.use('/api/appoint', require('./routes/appointment.routes')) // подключаем роут


const PORT = config.get('port') || 5000

async function start() {

    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log('Server error сервер не запустился или не полключился к бд из app.js', e.message)
        process.exit(1)
    }
}
start()
