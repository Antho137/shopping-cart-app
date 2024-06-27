import React from "react";
import { products } from "../data/products";

const Product = ({ addToCart }) => {

    return (
        <div className="product-data">
            {products.map(product => (
                <div className="card" key={product.id}>
                    <img className="card-image" src={product.image} alt="" />
                    <p className="card-title">{product.name}</p>
                    <p className="card-price">${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to cart</button> 
                </div>
            ))}
        </div>
    );
};

export default Product;