import React, { useEffect, useState } from 'react'
import Header from './header'
import Singleproduct from './singleproduct'

function Cart({ cart, setCart }) {
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [cart])

    console.log(cart, "cart")
    return (
        <div>Cart
            <Header></Header>
            <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: 30 }}>My Cart</span>
                <br />
                <span style={{ fontSize: 30 }}>Total: {total}</span>
                <div className="productlist">
                    {cart.map((prod) => (
                        <Singleproduct prod={prod} cart={cart} setCart={setCart} />
                        // console.log(prod)
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cart