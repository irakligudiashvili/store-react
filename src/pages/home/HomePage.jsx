import { Link } from 'react-router-dom'
import Products from '../../components/Products'
import './homepage.css'

function HomePage(){
    return (
        <div className='home'>
            {/* <div className='home__hero'> 
                <h1 className='home__hero-title'>Fake Store</h1>
                <img className='home__hero-img' src='/src/assets/homepage/background.jpg'/>
            </div> */}
            <div className='home__section'>
                <div className='section__title-container'>
                    <h2>Men's Clothing</h2>
                    <Link to='category/men' >View All</Link>
                </div>
                <Products productType={'men'} productCount={4}/>
            </div>
            <div className='home__section'>
                <div className='section__title-container'>
                    <h2>Women's Clothing</h2>
                    <Link to='category/women' >View All</Link>
                </div>
                <Products productType={'women'} productCount={4}/>
            </div>
            <div className='home__section'>
                <div className='section__title-container'>
                    <h2>Jewelery</h2>
                    <Link to='category/jewelery' >View All</Link>
                </div>
                <Products productType={'jewelery'} productCount={4}/>
            </div>
            <div className='home__section'>
                <div className='section__title-container'>
                    <h2>electronics</h2>
                    <Link to='category/electronics' >View All</Link>
                </div>
                <Products productType={'electronics'} productCount={4}/>
            </div>
        </div>
    )
}

export default HomePage