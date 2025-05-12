import { useCart } from "../context/cartContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const { cart, updateQuantity, removeFromCart, total } = useCart();
    const navigate = useNavigate();

    const containerStyle = {
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        color: "#111",
        fontFamily: "Arial, sans-serif",
        borderRadius: "10px",
    };

    const itemStyle = {
        backgroundColor: "#fff",
        marginBottom: "15px",
        padding: "15px",
        borderRadius: "8px",
        border: "1px solid #ccc",
    };

    const buttonStyle = {
        padding: "8px 12px",
        backgroundColor: "rebeccapurple",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginRight: "10px",
    };

    const removeButtonStyle = {
        ...buttonStyle,
        backgroundColor: "black",
    };

    const inputStyle = {
        width: "50px",
        padding: "5px",
        marginLeft: "10px",
        borderRadius: "4px",
        border: "1px solid #aaa",
    };

    const headingStyle = {
        color: "rebeccapurple",
        marginBottom: "20px",
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Your Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} style={itemStyle}>
                            <h4>{item.name}</h4>
                            <p>₹{item.price}</p>
                            Quantity:
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                    updateQuantity(item.id, parseInt(e.target.value))
                                }
                                style={inputStyle}
                            />
                            <div style={{ marginTop: "10px" }}>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    style={removeButtonStyle}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <h3>Total: ₹{total.toFixed(2)}</h3>
                    <button onClick={() => navigate("/success")} style={buttonStyle}>
                        Place Order
                    </button>
                </>
            )}
        </div>
    );
}
