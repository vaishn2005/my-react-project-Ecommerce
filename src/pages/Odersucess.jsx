import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#1a1a2e", // Dark background for contrast
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif",
            color: "#fff", // Light text color for better contrast
        },
        title: {
            fontSize: "3rem",
            color: "#FF007F", // Neon Pink
            marginBottom: "20px",
            textShadow: "0 0 15px #FF007F", // Glowing effect
        },
        message: {
            fontSize: "1.2rem",
            color: "#ccc", // Soft gray for the message
            marginBottom: "30px",
            textShadow: "0 0 10px #FF007F", // Glowing pink text shadow
        },
        button: {
            padding: "14px 30px",
            fontSize: "1.1rem",
            backgroundColor: "#00FF7F", // Neon Green
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 0 15px #00FF7F, 0 0 40px #00FF7F", // Glowing button effect
            textDecoration: "none",
        },
        buttonHover: {
            backgroundColor: "#FF007F", // Neon Pink on hover
            boxShadow: "0 0 15px #FF007F, 0 0 45px #FF007F",
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us.</p>
            <a
                href="/"
                style={styles.button}
                onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
                onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
            >
                Go to Home
            </a>
        </div>
    );
}
