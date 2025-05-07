import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import '../styles/ProductItem.css';

const NonAccessibleProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, shoppingList, getCartProgress } = useGame();
  const isOutOfStock = product.inStock === false;
  const isInShoppingList = shoppingList.some(item => item.id === product.id);
  const cartProgress = getCartProgress(product.id);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (isInShoppingList) {
      addToCart(product.id, quantity);
    }
  };

  return (
    <div className="product-item">
      <div className="product-content">
        <img src={product.image} alt="" />
        <div>
          <h1>{product.name}</h1>
          <h2>{product.description}</h2>
          <div>
            <span>Price: ${product.price}</span>
          </div>
          {isOutOfStock && (
            <div className="out-of-stock">
              Out of Stock
            </div>
          )}
          {isInShoppingList && (
            <div>
              Required for shopping list
            </div>
          )}
        </div>
      </div>

      <div className="product-actions">
        <div className="quantity-control">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={isOutOfStock}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            min="1"
            disabled={isOutOfStock}
          />
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={isOutOfStock}
          >
            +
          </button>
        </div>

        <div className="action-buttons">
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
          >
            Add to Cart
          </button>
        </div>

        {isInShoppingList && cartProgress > 0 && (
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${cartProgress * 100}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NonAccessibleProductItem; 