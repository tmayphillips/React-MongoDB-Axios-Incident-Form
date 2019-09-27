const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

var mongoose = require('mongoose')
const Incident = require('./schemas/incident')

const PORT = 8080

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost/incidentdb', {useNewUrlParser: true}, (error) => {
    if(!error) {
        console.log('Successfully connected to MongoDB database!')
    }
});

app.post('/incidents', (req,res) => {
  let recordID = req.body.recordID
  let callNumber = req.body.callNumber
  let callDateTime = req.body.callDateTime
  let priority = req.body.priority
  let district = req.body.district
  let beat = req.body.beat
  let description = req.body.description
  let incidentLocation = req.body.incidentLocation
  let zipcode = req.body.zipcode
  let neighborhood = req.body.neighborhood
  let station = req.body.station
  let location = req.body.location

  let incident = new Incident()

  incident.recordID = recordID
  incident.callNumber = callNumber
  incident.callDateTime = callDateTime
  incident.priority = priority
  incident.district = district
  incident.beat = beat
  incident.description = description
  incident.incidentLocation = incidentLocation
  incident.zipcode = zipcode
  incident.neighborhood = neighborhood
  incident.station = station
  incident.location = location

  incident.save((error) => {
    if(error) {
      res.json({error: 'Unable to save incident'})
    } else {
      res.json({success: true, message: 'Incident saved'})
    }
  })

})

app.get('/incidents',(req,res) => {
    Incident.find({},(error,posts) => {
        if(error) {
            res.json({error: 'Unable to fetch posts!'})
        } else {
            res.json(posts)
        }
    })
})

app.listen(PORT,() => {
  console.log('Server is running...')
})
