import React from "react";

const Cart = ({ cart, deleteFromCart, totalCost, setCart, deleteCart }) => {

    return (
        <div className={` cart ${cart.length > 0 ? 'active' : ''}`}>
            <div className="modal-header">
                    <h3>The cart</h3>
                    <button className="close-btn" onClick={() => deleteCart()}>&times;</button>
            </div>

            {cart.length === 0 ? (
                <p className="empty-cart">The cart is empty!</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.product.id} className="cart-item">
                                <div>
                                    <div className="cart-info">
                                        <div className="cart-image">
                                            <img src={item.product.image} alt="" />
                                        </div>
                                        <div className="cart-details">
                                            <p>{item.product.name}</p>
                                            <p>U. price: ${item.product.price}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="cart-actions">
                                            <button 
                                                className="remove-btn"
                                                onClick={() => deleteFromCart(item.product)}>Remove
                                            </button>
                                            <div className="quantity">
                                                <button
                                                    onClick={(e) => {
                                                        setCart((prevCart) => {
                                                            const updatedCart =   prevCart.map((prevItem) =>  prevItem.product.id === item.product.id ? { ...prevItem, quantity: item.quantity + 1 } : prevItem);

                                                            return updatedCart;
                                                        })
                                                    }}>+
                                                </button>
                                                <p className="cart-qty">{item.quantity}</p>
                                                <button
                                                    onClick={(e) => {
                                                        setCart((prevCart) => {
                                                            const updatedCart =   prevCart.map((prevItem) =>  prevItem.product.id === item.product.id ? { ...prevItem, quantity: Math.max(item.quantity - 1, 0) } : prevItem);

                                                            return updatedCart;
                                                        })
                                                    }}>-
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="check-total">
                        <p className="total">Total: ${totalCost()}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;