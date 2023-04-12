import React from 'react'
import Header from './header'
import Singleproduct from './singleproduct';

import { CartState } from '../CreateContext';

function Product() {
    const productlist = CartState().productlist
    console.log(productlist)
 
    return (
        <div>
            product
            <Header></Header>

            <div className='productlist'>
                {
                    productlist.map((item, index) => {
                        return <Singleproduct prod={item} key={index}></Singleproduct>
                    })

                }
            </div>
        </div>
    )
}

export default Product