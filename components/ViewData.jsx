import React from 'react'
import Hotel from './Hotel'
import Recipe from './Recipe'
import Product from './Product'
import Restaurant from './Restaurant'

const ViewData = (props) => {
  const handleClick = () => {
    props.saveData();
  }
  return (
    <div>
      <div className="text-lg" 
      style={{whiteSpace: "pre-line"}}
      >
        {props.data.type == 'hotel' ? 
        <Hotel data={props.data}/> : <></>}

        {props.data.type == 'product' ?
        <Product data={props.data}/> : <></>}

        {props.data.type == 'recipe' ?
        <Recipe data={props.data}/> : <></>}

        {props.data.type == 'restaurant' ?
        <Restaurant data={props.data}/> : <></>}

        {props.data.type == 'invalid' ?
        <>
          <p>{props.data.message}</p>
          <button onClick={handleClick}>Return to search</button>
        </> : <></>}

      </div>
    </div>
  )
}

export default ViewData