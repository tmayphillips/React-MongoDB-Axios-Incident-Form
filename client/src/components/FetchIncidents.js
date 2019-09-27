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
            <li>incident.priority</li>
          </div>
        )
      })
    })
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default FetchIncidents
