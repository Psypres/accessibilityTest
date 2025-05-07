import React from 'react';
import AccessibleProductItem from '../components/AccessibleProductItem';
import ShoppingList from '../components/ShoppingList';
import { GameProvider } from '../context/GameContext';
import { products } from '../data/products';

const AccessiblePage = () => {
  return (
    <GameProvider>
      <div className="container">
        <h1>Accessible Grocery Store</h1>
        <p className="description">
          This version includes proper ARIA labels, keyboard navigation, and screen reader support.
          Try using a screen reader or keyboard navigation to experience the difference!
        </p>
        
        <ShoppingList />
        
        <div className="product-grid">
          {products.map(product => (
            <AccessibleProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </GameProvider>
  );
};

export default AccessiblePage; 