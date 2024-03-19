import { createContext, useState } from "react";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([{
    quantity: 0,
    item: null
  }])


  const addToCart = (quantity, item) => {
    console.log(quantity, item)
    if (cart.length > 0) {
      setCart(...cart, { quantity, item })
    } else {
      setCart(quantity, item)
    }
  }



  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  )

}


