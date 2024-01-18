import React, { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalNoItems = cartCtx.items.reduce((totalNoItems, item)=>{ return totalNoItems+item.quantity},0)
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logoImg} alt='A Restuarant' />
            <h1>React Food</h1>
        </div>
        <nav>
           
            <Button textOnly>Cart ({totalNoItems})</Button>  {/* similar to textOnly={true} */}

        </nav>
    </header>
  )
}
