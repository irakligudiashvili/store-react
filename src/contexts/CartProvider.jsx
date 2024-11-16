import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }){
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (product, quantity = 1) => {
        setCartItems(prevItems => { // prev items grabs previous state (current items in the cart) when function is called
            const existingItem = prevItems.find(item => item.id === product.id); // check if item exists

            // if item exists, add quantity
            if(existingItem){
                const updatedCart = prevItems.map(item => {
                    if(item.id === product.id){
                        return {...item, quantity: item.quantity + quantity};
                    }

                    return item;
                });

                return updatedCart;
            }

            // if item doesnt exist, add it
            const newCart = [...prevItems, {...product, quantity}];

            return newCart;
        })
    }

    return (
        <CartContext.Provider value={{cartItems, addItemToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);