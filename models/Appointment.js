const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    date: { type: String },
    service: { type: String },
    model: { type: String },
    dateCreate: { type: String },
    owner: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Appointment', schema)