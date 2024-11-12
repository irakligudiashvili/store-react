import { useState } from "react";

function ProductCard({ product, addToCart }){
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => setQuantity((prev) => prev + 1);
    const decrementQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

    const handleAddToCart = () => {
        addToCart({ ...product, quantity});
        setQuantity(1);
    }

    return (
        <div>
            <img src={product.image} style={{width: "150px"}} />
            <h2>{product.title}</h2>
            <p>${product.price.toFixed(2)}</p>
            <div>
                <button onClick={decrementQuantity}>-</button>
                <input
                    type='number'
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <button onClick={incrementQuantity}>+</button>
            </div>
            <button onClick={handleAddToCart}>
                Add to cart
            </button>
        </div>
    )
}

export default ProductCard