import { useCart } from "../context/cartContext.jsx";
import { useNavigate } from "react-router-dom";
export default function Cart() {
    const { cart,updateQuantity, removeFromCart,total } = useCart();
    const navigate = useNavigate();
    return (
        <div className="container">
            <h2>your cart</h2>
            { cart.lenth === 0 ? <p>no items in cart.</p> :(
                <>
                {cart.map(item => (
                   <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                    <input type="number" min="1" value={item.quantity}
                    onChange={e => updateQuantity(item.id,parseInt(e,EventTarget.value))}
                    />
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                   </div> 
                ))}
                <h3>Total: {total.toFixed(2)}</h3>
                <button onClick={() => navigate("/success")}
                >place Order</button>

                </>
            )}
        </div>
    );
}