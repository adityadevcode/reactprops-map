// functional component
// import React from 'react'

const Props = (props) => {
  return (
    <div>
       <h3>Fullname:{props.name}</h3> 
       <p>Age:{props.age}</p>
       <h4>Place:{props.place}</h4>
       <h4>Country:{props.country}</h4>
    </div>
  )
}

export default Props