import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import { products } from "../data/products";

const Home = () => {
    const [foods] = useState([products]);
    const [cart, setCart] = useState([]);

    const addToCart = (products) => {
        const foodInCart = cart.find(item => item.product.id === products.id);
        if (foodInCart) {
            const cartUpdate = cart.map(item  => 
                item.product.id === products.id ?
                { ...item, quantity: item.quantity + 1 } : item
            )
            setCart(cartUpdate);
        } else {
            setCart([...cart, {product: products, quantity: 1}]);
        }
    };

    const deleteFromCart = (products) => {
        const updatedCart = cart.filter(item  => 
            item.product.id !== products.id);
            setCart(updatedCart);
    };

    const deleteCart = () => {
        if (cart) {
            setCart([]);
        }
    };

    const totalCost = () => {
        return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    return (
        <div className='home'>
            <div className='intro'>
                <h2>You are welcome.</h2>
                <p>Please, select your menu and add to cart.</p>
            </div>
            <div className='product'> 
                <Product 
                    foods={foods}
                    addToCart={addToCart}
                />
                <Cart
                    cart={cart}
                    deleteFromCart={deleteFromCart}
                    totalCost={totalCost}
                    setCart={setCart}
                    deleteCart = {deleteCart}
                />
            </div>
        </div>
    );
}

export default Home;