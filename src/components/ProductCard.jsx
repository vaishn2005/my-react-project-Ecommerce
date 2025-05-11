import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const goToDetails = () => navigate(`/product/${product.id}`);
    return (
        <div className="product-card">
            <div className="card-clickable" onClick={goToDetails}>
<img src={product.image} alt={product.name} />
<h3>{product.name}</h3>
<p>₹{product.price.toFixed(2)}</p>
<p className="view-details">View Details</p>
            </div>
            <button onClick={() => addToCart(product)}
            className="add-cart-btn">
                🛒 add to cart
            </button>
        </div>
    );ntit
}