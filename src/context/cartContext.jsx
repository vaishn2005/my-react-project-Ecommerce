import { createContext, useContext, useState } from "react";

// Create context
const cartContext = createContext();

// Custom hook to use cart context
export const useCart = () => useContext(cartContext);

// Cart Provider component
export function Cartprovider({ children }) {
    const [cart, setCart] = useState([]);

    // Add item to cart
    const addToCart = (product) => {
        const exists = cart.find(item => item.id === product.id);
        if (exists) {
            updateQuantity(product.id, exists.quantity + 1);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    // Update item quantity
    const updateQuantity = (id, quantity) => {
        if (quantity < 1) {
            removeFromCart(id); // Optional: auto-remove if quantity is less than 1
        } else {
            setCart(cart.map(item =>
                item.id === id ? { ...item, quantity } : item
            ));
        }
    };

    // Clear entire cart
    const clearCart = () => setCart([]);

    // Total cart value
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <cartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                total
            }}
        >
            {children}
        </cartContext.Provider>
    );
}
