import React, {Component} from 'react'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class BaseLayout extends Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout
