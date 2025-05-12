import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#f5f5f5",
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif"
        },
        title: {
            fontSize: "2.5rem",
            color: "#4CAF50",
            marginBottom: "20px"
        },
        message: {
            fontSize: "1.2rem",
            color: "#333",
            marginBottom: "30px"
        },
        button: {
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background 0.3s ease",
            textDecoration: "none"
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us.</p>
            <a href="/" style={styles.button}>Go to Home</a>
        </div>
    );
}
