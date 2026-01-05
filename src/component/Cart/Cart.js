
// import "./Cart.css";

// const Cart = ({ cart }) => {
//   let total = 0;
//   let shipping = 0;

//   for (const product of cart) {
//     total = total + product.price;
//     shipping = shipping + product.shipping;
//   }
//   const tax = parseFloat((total * (5 / 100)).toFixed(2));
//   const grandTotal = total + shipping + tax;
//   return (
//     <div className="cart">
//       <h3>Order Summary</h3>
//       <p>Selected Items: {cart.length}</p>
//       <p>Total Price: ${total}</p>
//       <p>Total Shipping: ${shipping} </p>
//       <p>Tax: {tax}</p>
//       <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
//     </div>
//   );
// };

// export default Cart;




import React from 'react';
import './Cart.css';

const Cart = ({ cart, onIncrease, onDecrease, onRemove, onClearCart }) => {
  // Calculate totals
  let total = 0;
  let shipping = 0;
  
  for (const product of cart) {
    total += product.price * product.quantity;
    shipping += product.shipping;
  }
  
  const tax = parseFloat((total * 0.05).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <div className="cart-header">
        <h3>🛒 Order Summary</h3>
        {cart.length > 0 && (
          <button className="clear-cart-btn" onClick={onClearCart}>
            Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛍️</div>
          <h4>Your cart is empty</h4>
          <p>Add some products to get started!</p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="cart-items">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="cart-item-img"
                />
                
                <div className="cart-item-details">
                  <h4>{product.name}</h4>
                  <p className="item-price">${product.price.toFixed(2)}</p>
                </div>

                <div className="quantity-controls">
                  <button 
                    className="qty-btn"
                    onClick={() => onDecrease(product.id)}
                    disabled={product.quantity <= 1}
                  >
                    −
                  </button>
                  <span className="quantity">{product.quantity}</span>
                  <button 
                    className="qty-btn"
                    onClick={() => onIncrease(product.id)}
                  >
                    +
                  </button>
                </div>

                <div className="item-total">
                  ${(product.price * product.quantity).toFixed(2)}
                </div>

                <button 
                  className="remove-btn"
                  onClick={() => onRemove(product.id)}
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <div className="summary-row">
              <span>Selected Items:</span>
              <span>{cart.length} products</span>
            </div>
            <div className="summary-row">
              <span>Total Items:</span>
              <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax (5%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row grand-total">
              <span>Grand Total:</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;  
