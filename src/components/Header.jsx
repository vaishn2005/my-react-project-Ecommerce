import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Header() {
    const { cart } = useCart();

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#2c003e", // deep violet
        color: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif"
    };

    const logoStyle = {
        fontSize: "24px",
        textDecoration: "none",
        color: "#ffffff",
        fontWeight: "bold",
        letterSpacing: "1px"
    };

    const cartLinkStyle = {
        textDecoration: "none",
        color: "#ffffff",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
    };

    const cartCountStyle = {
        backgroundColor: "#ff66cc", // pink-violet
        color: "#2c003e", // contrast
        borderRadius: "12px",
        padding: "2px 8px",
        marginLeft: "4px",
        fontSize: "14px",
        fontWeight: "bold"
    };

    return (
        <header style={headerStyle}>
            <Link to="/" style={logoStyle}>CodeShop</Link>
            <Link to="/cart" style={cartLinkStyle}>
                🛒 Cart
                <span style={cartCountStyle}>{cart.length}</span>
            </Link>
        </header>
    );
}
