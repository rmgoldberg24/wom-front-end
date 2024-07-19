import React from 'react'

const Restaurant = (props) => {
  return (
    <div>
        <p>{props.data.name}</p>
        <p>Cuisine: {props.data.foodType}</p>
        <p>{props.data.address}</p>
        <p>{props.data.phoneNumber}</p>
        <a href={props.data.url}>Website</a>
        <p>Recommended by: {props.data.recommender}</p>

    </div>
  )
}

export default Restaurant