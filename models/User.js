const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    appointment: [{ type: Types.ObjectId, ref: 'Appointment' }]
})

module.exports = model('User', schema)