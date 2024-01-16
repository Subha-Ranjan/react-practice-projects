import React from 'react'

export default function MealItem({meal}) {
    console.log(meal.image)
  return (
    <li className='meal-item' key={meal.id}>
        <article>
            {/* <img src={"../backend/public/"+meal.image} alt={meal.name} /> */}
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />

            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{meal.price}</p>
                <p className='meal-item-description'>{meal.description}</p>
            </div>
            <p className="meal-item-actions"><button>Add to Cart</button></p>
        </article>
        
    </li>
  )
}