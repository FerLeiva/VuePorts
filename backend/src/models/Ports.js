const { Schema, model } = require('mongoose')

const PortsSchema = new Schema({
    id: Number,
    name: String,
    continent: String,
    country: String,
    coordinates: String
})

module.exports = model('Ports', PortsSchema)