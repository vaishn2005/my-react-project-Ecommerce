import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";
import "./ProductDetails.css"

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find(p => p. id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();

    return (
        <div className="Productdetails">
            <h2>{product.name}</h2>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
            <p>₹{product.price}</p>
            <button onClick={() => { addToCart(product);
            navigate("/cart"); }}>
                add to cart
            </button>
            </div>
    );
}