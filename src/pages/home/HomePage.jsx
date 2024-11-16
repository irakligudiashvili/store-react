import Products from '../../components/Products'
import './homepage.css'

function HomePage(){
    return (
        <div className='home'>
            <div className='home__hero'> 
                <h1 className='home__hero-title'>Fake Store</h1>
                <img />
            </div>
            <div className='home__section'>
                <h2>Men's Clothing</h2>
                <Products productType={'men'} productCount={4}/>
            </div>
            <div className='home__section'>
                <h2>Women's Clothing</h2>
                <Products productType={'women'} productCount={4}/>
            </div>
            <div className='home__section'>
                <h2>Jewelery</h2>
                <Products productType={'jewelery'} productCount={4}/>
            </div>
            <div className='home__section'>
                <h2>Electronics</h2>
                <Products productType={'electronics'} productCount={4}/>
            </div>
        </div>
    )
}

export default HomePage