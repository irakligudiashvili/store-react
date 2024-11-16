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

    const removeItem = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId)) // leaves items that do not match the id
    }

    const adjustCount = (productId, operationType) => {
        setCartItems(prevItems => {
            return prevItems.map(item => {
                if(item.id === productId){
                    if(operationType === 'increase'){
                        return {...item, quantity: item.quantity + 1};
                    } else if (operationType === 'decrease'){
                        if(item.quantity > 1){
                            return {...item, quantity: item.quantity - 1};
                        } else {
                            return {...item, quantity: 1};
                        }
                    }
                }
                return item;
            });
        })
    }

    const getProductTotalPrice = (productId) => {
        const product = cartItems.find(item => item.id === productId);
        
        return (product.price * product.quantity).toFixed(2);
    }

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0).toFixed(2);
    }

    const getTotalItemCount = () => {
        return cartItems.length;
    }

    return (
        <CartContext.Provider value={{cartItems, addItemToCart, removeItem, adjustCount, getProductTotalPrice, getTotalPrice, getTotalItemCount}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);