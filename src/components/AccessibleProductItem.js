// AccessibleProductItem AAA-compliant with correct keyboard and screen reader support
import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import '../styles/ProductItem.css';

const AccessibleProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [announcement, setAnnouncement] = useState('');
  const { addToCart, shoppingList, getCartProgress } = useGame();
  const isOutOfStock = product.inStock === false;
  const isInShoppingList = shoppingList.some(item => item.id === product.id);
  const cartProgress = getCartProgress(product.id);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    setAnnouncement(`Quantity changed to ${newQuantity}`);
  };

  const handleAddToCart = () => {
    if (isInShoppingList) {
      addToCart(product.id, quantity);
      setAnnouncement(`Added ${quantity} ${product.name} to cart`);
    } else {
      setAnnouncement(`${product.name} is not in your shopping list`);
    }
  };

  useEffect(() => {
    if (announcement) {
      const timer = setTimeout(() => setAnnouncement(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [announcement]);

  if (!product || !product.id) {
    return (
      <div role="alert" style={{ color: 'red' }}>
        Product data is missing or invalid.
      </div>
    );
  }

  return (
    <div 
      className="product-item"
      aria-label={`${product.name}${isOutOfStock ? ' - Out of Stock' : ''}`}
    >
      <div className="product-content">
        <img 
          src={product.image} 
          alt={product.name}
          width="150"
          height="150"
        />
        <div>
          <h1>{product.name}</h1>
          <h2>{product.description}</h2>
          <div role="group" aria-labelledby={`price-${product.id}`}>
            <div>
              <span id={`price-${product.id}`}>Price:</span>
              <span aria-label={`${product.price} dollars`}>${product.price}</span>
            </div>
          </div>
          {isOutOfStock && (
            <div role="status" aria-live="polite" className="out-of-stock">
              Out of Stock
            </div>
          )}
          {isInShoppingList && (
            <div role="status" aria-live="polite">
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
            aria-label="Decrease quantity"
            aria-disabled={isOutOfStock}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            min="1"
            disabled={isOutOfStock}
            aria-label="Quantity"
            aria-disabled={isOutOfStock}
          />
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={isOutOfStock}
            aria-label="Increase quantity"
            aria-disabled={isOutOfStock}
          >
            +
          </button>
        </div>

        <div className="action-buttons">
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            aria-label={`Add ${quantity} ${product.name} to cart`}
            aria-disabled={isOutOfStock}
          >
            Add to Cart
          </button>
        </div>

        {isInShoppingList && cartProgress > 0 && (
          <div 
            className="progress-bar"
            role="progressbar"
            aria-valuenow={cartProgress * 100}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div 
              className="progress-fill"
              style={{ width: `${cartProgress * 100}%` }}
            />
          </div>
        )}
      </div>

      {announcement && (
        <div 
          role="status" 
          aria-live="polite" 
          className="sr-only"
        >
          {announcement}
        </div>
      )}
    </div>
  );
};

export default AccessibleProductItem;
