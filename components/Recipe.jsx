import React from 'react'

const Recipe = (props) => {
  return (
    <div>
        <p>{props.data.recipeName}</p>
        <br/>
        <p>Ingredients:</p>
            <ul>
            {props.data.ingredients.map(
                    (ingredient) => 
                        <li>{ingredient}</li>
                )}
            </ul>
        <br/>
        <p>Steps:</p>
            <ol>
                {props.data.steps.map(
                    (step, number) =>
                        <li>{number+1}. {step}</li>
                )}
            </ol>
        <a href={props.data.url}>Website</a>
        <p>Recommended by: {props.data.recommender}</p>
    </div>
  )
}

export default Recipe