import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const styles = {
        container: {
            maxWidth: "800px",
            margin: "50px auto",
            padding: "30px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)", // subtle shadow for a clean look
            borderRadius: "12px",
            backgroundColor: "#fff", // light background for a fresh look
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "center",
            color: "#333" // dark text for readability
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" // light shadow for a smooth appearance
        },
        name: {
            fontSize: "2.5rem",
            marginBottom: "15px",
            color: "#007BFF", // cool blue for the title
            fontWeight: "bold",
            textShadow: "0 0 5px rgba(0, 123, 255, 0.4)" // subtle glow effect
        },
        description: {
            fontSize: "1.2rem",
            marginBottom: "15px",
            color: "#555" // medium gray for description
        },
        price: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#28a745", // green for price to represent positivity and value
            marginBottom: "25px"
        },
        button: {
            padding: "14px 30px",
            fontSize: "1.1rem",
            backgroundColor: "#007BFF", // blue for consistency with title
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 0 10px rgba(0, 123, 255, 0.3)", // blue glow for button
        },
        buttonHover: {
            backgroundColor: "#0056b3", // dark blue on hover for contrast
            boxShadow: "0 0 15px rgba(0, 123, 255, 0.5)" // stronger glow on hover
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={product.name} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price}</p>
            <button
                style={styles.button}
                onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
                onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
