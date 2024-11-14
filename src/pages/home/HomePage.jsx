import Products from '../../components/Products'
import './homepage.css'

function HomePage(){
    return (
        <div className='home'>
            <div className='home__hero' src='src/assets/homepage/background.png'> 
                <h1 className='home__hero-title'>Fake Store</h1>
                <img />
            </div>
            <div>
                <Products productType={'all'} />
            </div>
        </div>
    )
}

export default HomePage