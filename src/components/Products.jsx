import { useEffect } from "react";
import { useState } from "react";

function Products({ productType }){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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

                setProducts(filteredData);
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
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <img src={product.image} />
                    <h2>{product.title}</h2>
                    <p>${product.price.toFixed(2)}</p>
                    <button>Add To Cart</button>
                </div>
            ))}
        </div>
    )

    Products.proptypes = {
        productType: PropTypes.oneOf(['men', 'women', 'jewelry', 'electronics', 'all']).isRequired
    }
}

export default Products