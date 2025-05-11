import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import "./Header.css";
 
export default function Header() {
    const { cart } = useCart();

    return (
        <header className="site-header">
            <Link to="/" className="logo"> e-commorece</Link>
            <Link to="/cart" className="cart-link">        
           🛒 cart <span className="cart-count">{cart.length}
            </span>
            </Link>
        </header>
    );
}