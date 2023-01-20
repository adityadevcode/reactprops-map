import React from 'react'

function Mapmethod(props) {
  return (
    <div style={{border:'2px dotted purple', width:90,height:130, margin:10, padding:50}}>
        <h4>ID:{props.id}</h4>
        <h5>Name:{props.name}</h5>
        <h5>Age:{props.age}</h5>
        <h6>Place:{props.place}</h6>
    </div>
  )
}

export default Mapmethod;