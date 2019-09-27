import React, {Component} from 'react'
import FetchIncidents from './FetchIncidents'

export class ViewIncidents extends Component {
  render() {
    return (
      <div>
        <h1>Incident List</h1>
        <FetchIncidents />
      </div>
    )
  }
}

export default ViewIncidents
