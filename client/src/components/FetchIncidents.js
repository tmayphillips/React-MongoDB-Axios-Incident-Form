import React, {Component} from 'react'

export class FetchIncidents extends Component {
  constructor() {
    super()
    this.state = {
      allIncidents: []
    }
  }

  componentDidMount() {
    let url = 'http://localhost:8080/incidents'
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      let allIncidents = json.map((incident) => {
        return (
          <div>
            <li>Record ID: {incident.recordID}</li>
            <li>Call Number: {incident.callNumber}</li>
            <li>Call Date and Time: {incident.callDateTime}</li>
            <li>Priority: {incident.priority}</li>
            <li>District: {incident.district}</li>
            <li>Beat: {incident.beat}</li>
            <li>Description: {incident.description}</li>
            <li>Incident Location: {incident.incidentLocation}</li>
            <li>Zipcode: {incident.zipcode}</li>
            <li>Neighborhood: {incident.neighborhood}</li>
            <li>Station: {incident.station}</li>
            <li>Location: {incident.location}</li>
            <br />
          </div>
        )
      })
      this.setState({allIncidents: allIncidents})
    })
  }

  render() {
    return (
      <div>
        <ul>{this.state.allIncidents}</ul>
      </div>
    )
  }
}

export default FetchIncidents
