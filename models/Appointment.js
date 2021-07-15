const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    date: { type: String, unique: true },
    service: { type: String },
    owner: [{ type: Types.ObjectId, ref: 'User' }]
})

module.exports = model('Appointment', schema)