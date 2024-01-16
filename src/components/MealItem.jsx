import React from 'react'
import { currencyFormatter } from '../util/Formatter'
import Button from './UI/Button'

export default function MealItem({meal}) {
  
  return (
    <li className='meal-item' key={meal.id}>
        <article>
            {/* <img src={"../backend/public/"+meal.image} alt={meal.name} /> */} {/*From Local*/}
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} /> {/*From Backend*/}
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className='meal-item-description'>{meal.description}</p>
            </div>
            <p className="meal-item-actions"><Button>Add to Cart</Button></p>
        </article>
        
    </li>
  )
}
