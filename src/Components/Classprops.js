// we are using class component props

import React from 'react'

class Classprops extends React.Component {
    
  render() {
    return (
    <div>
      <h4>Id:{this.props.id}</h4>
      <p>Series:{this.props.series}</p>
      <h5>Designation: {this.props.designation}</h5>
    </div>
    )
  }
}

export default Classprops;
