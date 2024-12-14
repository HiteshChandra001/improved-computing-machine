import React, { useState } from 'react'
import CartItem from './CartItem';
import Total from './Total';
const items = [
  {
    id: 1,
    title: "Apple",
    price: 50,
    num:1
  },
  {
    id: 2,
    title: "Banana",
    price: 30,
    num:1
  },
  {
    id: 3,
    title: "Grapes",
    price: 20,
    num:1
  },
  {
    id: 4,
    title: "Orange",
    price: 60,
    num:1
  }
]



const Cart = () => {
  const [cartItems, setCartItems] = useState(items);

  const handleChange=(id,n)=>{
    const newArr = cartItems.map(e=>e.id===id ? {...e,num:n} :e);
    setCartItems(newArr);
  }

  const totalP = cartItems.reduce((acc,cur)=> cur.num*cur.price + acc,0);
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map(e => <CartItem key={e.id} {...e} handleChange={handleChange}/>)}
      </ul>
      <Total totalP={totalP}/>
    </div>
  )
}

export default Cart