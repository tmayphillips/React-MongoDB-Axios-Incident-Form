import React, {Component} from 'react'
import axios from 'axios'

  class AddIncident extends Component {
    constructor() {
      super()
      this.state = {
        recordID: '',
        callNumber: '',
        callDateTime: '',
        priority: '',
        district: '',
        beat: '',
        description: '',
        incidentLocation: '',
        zipcode: '',
        neighborhood: '',
        station: '',
        location: ''
      }
    }

    handleTextBoxChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleAddIncident = () => {

      axios.post('http://localhost:8080/incidents', {
        recordID: this.state.recordID,
        callNumber: this.state.callNumber,
        callDateTime: this.state.callDateTime,
        priority: this.state.priority,
        district: this.state.district,
        beat: this.state.beat,
        description: this.state.description,
        incidentLocation: this.state.incidentLocation,
        zipcode: this.state.zipcode,
        neighborhood: this.state.neighborhood,
        station: this.state.station,
        location: this.state.location
      })
    }


  render() {
    return(
      <div>
        <h1>Add Incident</h1>
          <label>Record ID</label>
          <input type="text" onChange={this.handleTextBoxChange} name='recordID' id='recordID' />
          <label>Priority (1-4)</label>
          <input type="text" onChange={this.handleTextBoxChange} name='priority' id='priority' />
          <label>Priority (1-4)</label>
          <input type="text" onChange={this.handleTextBoxChange} name='priority' id='priority' />
          <button onClick={() => this.handleAddIncident()} type='button'>Submit</button>

      </div>
    )
  }
}

  export default AddIncident
