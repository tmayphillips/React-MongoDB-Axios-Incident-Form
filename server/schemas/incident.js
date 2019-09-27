const mongoose = require('mongoose')

const incidentSchema = new mongoose.Schema({
  recordID: String,
  callNumber: String,
  callDateTime: String,
  priority: String,
  district: String,
  beat: String,
  description: String,
  incidentLocation: String,
  zipcode: String,
  neighborhood: String,
  station: String,
  location: String
})

const Incident = mongoose.model('Incident', incidentSchema)

module.exports = Incident
