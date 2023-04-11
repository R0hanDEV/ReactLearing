import React, { useState } from 'react'
import Header from './header'
import Singleproduct from './singleproduct';
const { faker } = require('@faker-js/faker');
faker.seed(100)
function Product({cart, setCart}) {
    const productArray = [...Array(20)].map((p) => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image()
    }))
    const [productlist] = useState(productArray)
    console.log(typeof cart)
    return (
        <div>
            product
            <Header></Header>

            <div className='productlist'>
                {
                    productlist.map((item, index) => {
                        return <Singleproduct prod={item} key={index} cart={cart} setCart={setCart}></Singleproduct>
                    })

                }
            </div>
        </div>
    )
}

export default Product