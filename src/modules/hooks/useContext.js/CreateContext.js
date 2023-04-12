import React, { createContext, useContext } from 'react'
import { useState } from 'react';
const { faker } = require('@faker-js/faker');
faker.seed(100)

const Cart = createContext()

function CreateContext({ children  }) {
  const [cart, setCart] = useState([])
  const productArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image()
  }))
  const [productlist] = useState(productArray)

  console.log(children )
  return <Cart.Provider value={{ cart, setCart, productlist }} > {children }</Cart.Provider >;
}

export const CartState = () => {
  return useContext(Cart)
}


export default CreateContext