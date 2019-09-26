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
  let priority = req.body.priority

  let incident = new Incident()

  incident.priority = prior

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
