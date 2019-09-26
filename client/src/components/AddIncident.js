import React, {Component} from 'react'
import axios from 'axios'

  class AddIncident extends Component {
    constructor() {
      super()
      this.state = {
        priority: ''
      }
    }

    handleTextBoxChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleAddIncident = () => {
      const data = {
        priority: this.state.priority
      }

      console.log(data);

      axios.post('http://localhost:8080/incidents', {
        data
      })
    }


  render() {
    return(
      <div>
        <h1>Add Incident</h1>
          <label>Priority (1-4)</label>
          <input type="text" onChange={this.handleTextBoxChange} name='priority' id='priority' />
          <button onClick={() => this.handleAddIncident()} type='button'>Submit</button>

      </div>
    )
  }
}

  export default AddIncident
