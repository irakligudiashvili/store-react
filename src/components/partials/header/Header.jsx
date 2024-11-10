import { Link } from "react-router-dom";
import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return (
        <div className="header">
            <Link to='/'>
                <img src="src/assets/react.svg"/>
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link to='#'>Computers</Link>
                    </li>
                    <li>
                        <Link to='#'>Displays</Link>
                    </li>
                    <li>
                        <Link to='#'>Phones</Link>
                    </li>
                    <li>
                        <Link to='cart' id='cart'>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span>Cart</span>
                            <span className="cartCount">0</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;