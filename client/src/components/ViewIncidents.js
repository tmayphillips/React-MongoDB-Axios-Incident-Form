import React, {Component} from 'react'

export class ViewIncidents extends Component {
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
    })
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default ViewIncidents
