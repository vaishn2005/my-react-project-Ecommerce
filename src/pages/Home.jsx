import { useState } from "react";
import { products } from "../date/product.js";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Home(){
    const [search, setSearch]=useState("");
    const[category, setCategory]=useState("All");

    const filtered =products.filter(p=>
    (category === "All" || p.category === category)&& 
    p.name.toLowerCase().includes(search.toLowerCase())
    );

    const categories = ["All", ...new Set(products.map(p=> 
        p.category))];

        return (
            <div className="home-container">
                <h1>🏢 Explore Our Products</h1>
                <div className="filters">
                    <input
                    type="text"
                    placeholder="🔎 search for products..."
                    onChange={(e)=> setSearch(e.target.value)}
                    />
                    <select onChange={(e)=>setCategory(e.target.value)}>
                        {categories.map((cat)=>(
                            <option key={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <div className="product-grid">
                    {filtered.map((product)=>(
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        );
    }