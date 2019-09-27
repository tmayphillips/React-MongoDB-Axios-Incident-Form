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
          <input type="text" onChange={this.handleTextBoxChange} name='recordID' id='recordID' /><br />
          <label>Call Number</label>
          <input type="text" onChange={this.handleTextBoxChange} name='callNumber' id='callNumber' /><br />
          <label>Call Date and Time</label>
          <input type="text" onChange={this.handleTextBoxChange} name='callDateTime' id='callDateTime' /><br />
          <label>Priority (1-4)</label>
          <input type="text" onChange={this.handleTextBoxChange} name='priority' id='priority' /><br />
          <label>District</label>
          <input type="text" onChange={this.handleTextBoxChange} name='district' id='district' /><br />
          <label>Beat</label>
          <input type="text" onChange={this.handleTextBoxChange} name='beat' id='beat' /><br />
          <label>Description</label>
          <input type="text" onChange={this.handleTextBoxChange} name='description' id='description' /><br />
          <label>Incident Location</label>
          <input type="text" onChange={this.handleTextBoxChange} name='incidentLocation' id='incidentLocation' /><br />
          <label>Zip Code</label>
          <input type="text" onChange={this.handleTextBoxChange} name='zipcode' id='zipcode' /><br />
          <label>Neighborhood</label>
          <input type="text" onChange={this.handleTextBoxChange} name='neighborhood' id='neighborhood' /><br />
          <label>Station</label>
          <input type="text" onChange={this.handleTextBoxChange} name='station' id='station' /><br />
          <label>Location</label>
          <input type="text" onChange={this.handleTextBoxChange} name='location' id='location' /><br />
          <button onClick={() => this.handleAddIncident()} type='button'>Submit</button>

      </div>
    )
  }
}

  export default AddIncident
