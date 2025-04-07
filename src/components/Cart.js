import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item-actions">
                <label>
                  Quantity:
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                  />
                </label>
                <button onClick={() => onRemove(item.id)} className="remove-button">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${total.toFixed(2)}</p>
            <Link to="/checkout" className="checkout-button">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;