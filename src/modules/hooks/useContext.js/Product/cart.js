import React, { useEffect, useState } from 'react'
import Header from './header'
import Singleproduct from './singleproduct'
import { CartState } from '../CreateContext';

function Cart() {
    const contextCart = CartState()
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(contextCart.cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [contextCart.cart])

 
    return (
        <div>Cart
            <Header></Header>
            <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: 30 }}>My Cart</span>
                <br />
                <span style={{ fontSize: 30 }}>Total: {total}</span>
                <div className="productlist">
                    {contextCart.cart.map((prod) => (
                        <Singleproduct prod={prod} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cart