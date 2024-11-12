import { createContext, useState, useContext } from "react";

const CartContext = createContext();

// This component manages the cart state and provides functions to add and rmove items from the cart

export function CartProvider({ children }){
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    }

    const getCartItemCount = () => cartItems.length;

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartItemCount }}>
            {children}
        </CartContext.Provider>
    );
}

// useCart makes it easier to access the cart context by simply calling useCart() inside any component

export function useCart(){
    return useContext(CartContext);
}