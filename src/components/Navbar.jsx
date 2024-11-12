import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar(){
    const {getCartItemCount } = useCart();

    return (
        <nav>
            <h1>Phone Store</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
            </div>
            <div>
                <Link to='/cart'>Cart {getCartItemCount()}</Link>
            </div>
        </nav>
    )
}

export default Navbar