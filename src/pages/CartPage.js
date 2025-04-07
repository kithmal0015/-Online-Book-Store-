import React, { useState, useEffect } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  
  const [cartItems, setCartItems] = useState([]);

  // Mock loading cart items
  useEffect(() => {

    const mockItems = [
      { id: 1, title: 'Sample Book 1', price: 19.99, quantity: 1 },
      { id: 2, title: 'Sample Book 2', price: 29.99, quantity: 2 }
    ];
    
    setCartItems(mockItems);
  }, []);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <Cart 
        items={cartItems} 
        onRemove={handleRemoveItem} 
        onUpdateQuantity={handleUpdateQuantity} 
      />
    </div>
  );
};

export default CartPage;
