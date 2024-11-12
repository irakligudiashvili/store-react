import { useCart } from "../context/CartContext";

function CartPage(){
    const { cartItems } = useCart();

    return (
        <div>
            <h1>Your Cart</h1>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <h3>{item.title}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    )
}

export default CartPage