import { useEffect } from "react";
import { useState } from "react";
import { useCart } from "../contexts/CartProvider";
import './products.css';

function Products({ productType, productCount }){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { addItemToCart } = useCart();

    const categoryMap = {
        men: "men's clothing",
        women: "women's clothing",
        jewelery: "jewelery",
        electronics: "electronics",
        all: null,
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();

                const filteredData = productType === "all" ? data : data.filter(product => product.category === categoryMap[productType]);

                const limitedData = productCount ? filteredData.slice(0, productCount) : filteredData;
                
                setProducts(limitedData);
            } catch (error) {
                console.error("Error: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [productType]);

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="products__container">
            {products.map(product => (
                <div key={product.id} className="product__wrapper">
                    <img src={product.image} style={{width: "200px"}} className="product__img" />
                    <h2 className="product__title">{product.title}</h2>
                    <p className="product__price">${product.price.toFixed(2)}</p>
                    <button onClick={() => addItemToCart(product)} className="product__btn">Add To Cart</button>
                </div>
            ))}
        </div>
    )

    Products.proptypes = {
        productType: PropTypes.oneOf(['men', 'women', 'jewelry', 'electronics', 'all']).isRequired
    }
}

export default Products