import React from 'react'

const Product = (props) => {
  return (
    <div>
        <p>{props.data.name}</p>
        <p>Product Type: {props.data.productType}</p>
        <p>${props.data.cost}</p>
        <a href={props.data.url}>Website</a>
        <p>Recommended by: {props.data.recommender}</p>
    </div>
  )
}

export default Product