import React from 'react'

const Hotel = (props) => {
  return (
    <div>
        <p>{props.data.name}</p>
        <p>{props.data.address}</p>
        <p>{props.data.phoneNumber}</p>
        <p>Rating: {props.data.rating}</p>
        <a href={props.data.url}>Website</a>
        <p>Recommended by: {props.data.recommender}</p>
    </div>
  )
}

export default Hotel