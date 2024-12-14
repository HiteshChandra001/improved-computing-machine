import React from 'react'
import Counter from './Counter'

const CartItem = ({id,title,price,num,handleChange}) => {
  return (
    <div>
        <h3>{title} - <em>{price}</em>   <Counter num={num} id={id} handleChange={handleChange}/>
        </h3>
    </div>
  )
}

export default CartItem