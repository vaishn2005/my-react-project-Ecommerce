function CartItems({ item, removeFromCart, updateQuantity }) {
    const containerStyle = {
        backgroundColor: "#1a001f", // dark violet-black
        color: "#ffffff",
        padding: "15px",
        margin: "15px auto",
        borderRadius: "10px",
        width: "280px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center"
    };

    const infoStyle = {
        fontSize: "18px",
        marginBottom: "10px"
    };

    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "space-around",
        gap: "10px",
        flexWrap: "wrap"
    };

    const buttonStyle = {
        padding: "6px 12px",
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease"
    };

    const plusBtn = { ...buttonStyle, backgroundColor: "#ff66cc", color: "#1a001f" };
    const minusBtn = { ...buttonStyle, backgroundColor: "#d94fbf", color: "#1a001f" };
    const removeBtn = { ...buttonStyle, backgroundColor: "#ff3366", color: "#fff" };

    return (
        <div style={containerStyle}>
            <div style={infoStyle}>
                ₹{item.price} x {item.quantity}
            </div>
            <div style={buttonContainerStyle}>
                <button style={plusBtn} onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button style={minusBtn} onClick={() => updateQuantity(item.id, -1)}>-</button>
                <button style={removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
        </div>
    );
}

export default CartItems;
