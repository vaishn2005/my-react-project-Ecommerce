import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersucess() {
    const  { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    } ,[]);

    return (
        <div className="container">
            <h1>🎉 Order placed successfully!</h1>
            <p>thank you for shopping with us.</p>
        </div>
    );
}