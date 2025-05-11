function CartItems({ item, removeFromCart,
    updateQuantity}) {
        return (
            <div>
            <div className="cart-item">
                <span>{item.price} x {item.quantity}</span>
            </div>
            <div>
                <button onClick={() => updateQuantity(item.id,1)}>+</button>
                <button onClick={() => updateQuantity(item.id,-1)}>-</button>
                <button onClick={() => removeFromCart(item.id,1)}>remove</button>
                </div>
         </div>
        )
    }
    export default CartItems;