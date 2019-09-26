const mongoose = require('mongoose')

const incidentSchema = new mongoose.Schema({
  priority: String
})

const Incident = mongoose.model('Incident', incidentSchema)

module.exports = Incident
