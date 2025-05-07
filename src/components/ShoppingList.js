import React from 'react';
import { useGame } from '../context/GameContext';

const ShoppingList = () => {
  const { 
    shoppingList, 
    cart, 
    isGameComplete, 
    generateShoppingList, 
    getTimeElapsed, 
    formatTime 
  } = useGame();

  return (
    <div className="shopping-list" role="region" aria-label="Shopping List">
      <div className="game-controls">
        <button 
          onClick={generateShoppingList}
          className="start-button"
          aria-label="Start new shopping game"
        >
          {shoppingList.length ? 'Restart Game' : 'Start Game'}
        </button>
        <div className="timer" role="timer" aria-label="Time elapsed">
          {formatTime(getTimeElapsed())}
        </div>
      </div>

      {shoppingList.length > 0 && (
        <div className="list-container">
          <h2>Shopping List</h2>
          <ul>
            {shoppingList.map(item => (
              <li key={item.id} className="list-item">
                <span className="item-name">{item.name}</span>
                <span className="item-quantity">
                  {cart[item.id] || 0} / {item.requiredQuantity}
                </span>
                <div 
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={((cart[item.id] || 0) / item.requiredQuantity) * 100}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${((cart[item.id] || 0) / item.requiredQuantity) * 100}%` 
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isGameComplete && (
        <div 
          className="completion-message"
          role="alert"
          aria-live="polite"
        >
          <h3>🎉 Shopping Complete! 🎉</h3>
          <p>Time: {formatTime(getTimeElapsed())}</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingList; 