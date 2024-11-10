import { Link } from "react-router-dom";
import './header.css';

function Header(){
    return (
        <div className="header">
            <Link to='/'>
                <img src="src/assets/react.svg"/>
            </Link>

            <nav>
                <Link to='#'>Tech</Link>
                <Link to='#'>Tech</Link>
                <Link to='#'>Tech</Link>
                <Link to='cart' id='cart'>Cart</Link>
            </nav>
        </div>
    )
}

export default Header;