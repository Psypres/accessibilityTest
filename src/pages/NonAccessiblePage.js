import React from 'react';
import NonAccessibleProductItem from '../components/NonAccessibleProductItem';
import NonAccessibleShoppingList from '../components/NonAccessibleShoppingList';
import { GameProvider } from '../context/GameContext';
import { products } from '../data/products';

const NonAccessiblePage = () => {
  return (
    <GameProvider>
      <div className="container">
        <h1>Non-Accessible Grocery Store</h1>
        <p className="description">
          This version lacks proper accessibility features. Notice the difference in usability
          when using a screen reader or keyboard navigation.
        </p>
        
        <NonAccessibleShoppingList />
        
        <div className="product-grid">
          {products.map(product => (
            <NonAccessibleProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </GameProvider>
  );
};

export default NonAccessiblePage; 