import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const goToDetails = () => navigate(`/product/${product.id}`);

    // Styles
    const cardStyle = {
        width: "250px",
        backgroundColor: "#fff",
        color: "#333",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        margin: "15px",
        fontFamily: "'Roboto', sans-serif",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease",
    };

    const clickableStyle = {
        cursor: "pointer",
        padding: "15px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
    };

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "8px",
        transition: "transform 0.3s ease"
    };

    const titleStyle = {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "10px 0",
        color: "#333"
    };

    const priceStyle = {
        color: "#FF5722", // e-commerce standard price color
        fontSize: "18px",
        marginBottom: "8px",
    };

    const detailsText = {
        color: "#888",
        fontSize: "14px",
        marginTop: "8px",
        fontWeight: "normal"
    };

    const buttonStyle = {
        backgroundColor: "#FF5722", // standard orange for action
        color: "#fff",
        border: "none",
        padding: "12px 0",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "100%",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        transition: "background-color 0.3s ease",
    };

    const handleHover = (e, hover) => {
        e.target.style.backgroundColor = hover ? "#e55e2a" : "#FF5722";
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <div style={clickableStyle} onClick={goToDetails}>
                <img src={product.image} alt={product.name} style={imageStyle} />
                <h3 style={titleStyle}>{product.name}</h3>
                <p style={priceStyle}>₹{product.price.toFixed(2)}</p>
                <p style={detailsText}>View Details</p>
            </div>
            <button
                style={buttonStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                onClick={() => addToCart(product)}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
