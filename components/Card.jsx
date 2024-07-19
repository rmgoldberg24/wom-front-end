import React from 'react'

const Card = (props) => {
    const onClick = () => {
        props.setMyViewingData(props.data);
        // props.setRecipe(props.recipe);
        // props.setMode(props.mode);
    }
    return (
        <div 
            className="bg-white w-1/2 mx-auto  p-8 md:p-12 my-10 rounded-lg shadow-2xl hover:scale-125"
            onClick={onClick}
        >
            {props.title}
        </div>
  )
}

export default Card