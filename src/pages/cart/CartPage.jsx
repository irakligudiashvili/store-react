import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartProvider"
import './cartpage.css';

function CartPage(){
    const { cartItems } = useCart();

    const { removeItem, adjustCount, getProductTotalPrice, getTotalPrice } = useCart();

    return (
        <div className="cart-page">
            <h1 className="cart-page__heading">Your Cart</h1>
            {cartItems.length === 0 ? (
                <>
                    <p>No items in cart</p>
                    <Link to='/'>Return to Homepage</Link>
                </>
            ): (
                <div className="checkout">
                    <ul className="checkout__cart">
                        {cartItems.map(item => (
                            <li key={item.id} className="checkout__cart-item">
                                <img src={item.image} className="checkout__cart-item-img" />
                                <div className="checkout__cart-item-info">
                                    <div>
                                        <h2 className="checkout__cart-item-title">{item.title}</h2>
                                        <p className="checkout__cart-item-price">Price: ${item.price}</p>
                                    </div>
                                    <p>Total: ${getProductTotalPrice(item.id)}</p>
                                </div>
                                <div className="checkout__cart-actions">
                                    <button className="checkout__cart-remove" onClick={() => removeItem(item.id)}>Remove Item</button>
                                    <div>
                                        <p className="checkout__cart-item-quantity">Quantity: {item.quantity}</p>
                                        <button className="checkout__cart-item-btn" onClick={() => adjustCount(item.id, 'decrease')}>-</button>
                                        <button className="checkout__cart-item-btn" onClick={() => adjustCount(item.id, 'increase')}>+</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="checkout__summary">
                        <ul className="checkout__summary-list">
                            {cartItems.map(item => (
                                <li key={item.id} className="checkout__summary-item">
                                    <div>
                                        <p className="checkout__summary-item-title">{item.title}</p>
                                        <p className="checkout__summary-item-quantity">x{item.quantity}</p>
                                    </div>
                                    <p className="checkout__summary-item-price">${getProductTotalPrice(item.id)}</p>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <div className="checkout__summary-total">
                                <p className="checkout__summary-tota-text">Total:</p>
                                <p className="checkout__summary-total-price">${getTotalPrice()}</p>
                            </div>
                            <button className="checkout__summary-btn">Checkout</button>
                        </div>
                    </div>
                </div>
            )} 

        </div>
    )
}

export default CartPage