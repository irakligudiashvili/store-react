import { Link } from "react-router-dom"
import './header.css'

function Header(){
    return (
        <nav className='header__nav'>
            <Link to='/' className='header__logo'>
                <img src="src/assets/logo.png"/>
            </Link>
            <ul className='header__menu'>
                <li className='header__item'><Link to='/men'>Men's Clothing</Link></li>
                <li className='header__item'><Link to='/women'>Women's Clothing</Link></li>
                <li className='header__item'><Link to='/jewelry'>Jewelry</Link></li>
                <li className='header__item'><Link to='/electronics'>Electronics</Link></li>
                <li className='header__item header__item-cart'><Link to='/cart'>Cart: 0</Link></li>
            </ul>
        </nav>
    )
}

export default Header