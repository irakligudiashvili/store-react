import { useCart } from "../../contexts/CartProvider"
import './cartpage.css';

function CartPage(){
    const { cartItems } = useCart();


    return (
        <div>
            <h1>Cart Page</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ): (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <img src={item.image} />
                            <h2>{item.title}</h2>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </li>
                    ))}
                </ul>
            )} 
        </div>
    )
}

export default CartPage