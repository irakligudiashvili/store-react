import { useCart } from "../../contexts/CartProvider"
import './cartpage.css';

function CartPage(){
    const { cartItems } = useCart();

    const { removeItem, adjustCount, getProductTotalPrice, getTotalPrice } = useCart();

    return (
        <div>
            <h1>Cart Page</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ): (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <img src={item.image} />
                                <h2>{item.title}</h2>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => adjustCount(item.id, 'decrease')}>-</button>
                                <button onClick={() => removeItem(item.id)}>Remove Item</button>
                                <button onClick={() => adjustCount(item.id, 'increase')}>+</button>
                                <p>Total: ${getProductTotalPrice(item.id)}</p>
                            </li>
                        ))}
                    </ul>


                    <p>Total: ${getTotalPrice()}</p>
                </div>
            )} 

        </div>
    )
}

export default CartPage