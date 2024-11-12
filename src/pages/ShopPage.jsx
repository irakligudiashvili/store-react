import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

function ShopPage(){
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch('https://fakestopreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) = console.error('Error: ', error));
    }, []);

    return (
        <div>
            <h1>Shop Our Phones</h1>
            <div>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    )
}

export default ShopPage