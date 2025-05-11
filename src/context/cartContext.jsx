import { createContext,useContext,useState } from "react";
const cartContext = createContext();
export const useCart = () => useContext(cartContext);

export function Cartprovider({ children}) {
    const [cart, setCart ] = useState([]);
    const addToCart = (product) => {
        const exists = cart.find(item => item.id === product.id);
        if (exists) {
            updateQuantity(product.id,exists.quantity + 1);
        } else {
            setCart([...cart, {...product,quantity: 1 }]);
        }
    
    };
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
            
        
    };
    const updateQuantity = (id, quantity) => {
        setCart(cart.map(item => 
            item.id === id ?{...item, quantity } : item
        ));
    };
    const clearCart = () => setCart([]);
    const total = cart.reduce((sum,item) => sum + item.price * item.quantity,0);
    return (
        <cartContext.Provider value={{ cart, addToCart,removeFromCart,updateQuantity,clearCart,total}}>
            {children}
        </cartContext.Provider>

    );
}