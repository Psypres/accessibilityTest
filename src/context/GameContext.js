import React, { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([]);
  const [cart, setCart] = useState({});
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [availableProducts, setAvailableProducts] = useState(products);

  // Timer effect
  useEffect(() => {
    let timer;
    if (startTime && !isGameComplete) {
      timer = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [startTime, isGameComplete]);

  const generateShoppingList = () => {
    // Filter out out-of-stock items
    const inStockProducts = availableProducts.filter(product => product.inStock !== false);
    
    // Randomly select 6 items from in-stock products
    const randomProducts = [...inStockProducts]
      .sort(() => Math.random() - 0.5)
      .slice(0, 6)
      .map(product => ({
        ...product,
        requiredQuantity: Math.floor(Math.random() * 5) + 1
      }));

    setShoppingList(randomProducts);
    setCart({});
    setStartTime(Date.now());
    setEndTime(null);
    setIsGameComplete(false);
    setElapsedTime(0);
  };

  const addToCart = (productId, quantity) => {
    // Check if the product is in the shopping list
    const shoppingListItem = shoppingList.find(item => item.id === productId);
    if (!shoppingListItem) return;

    // Update cart
    setCart(prev => {
      const newCart = {
        ...prev,
        [productId]: (prev[productId] || 0) + quantity
      };

      // Check if all items are collected
      const isComplete = shoppingList.every(item => 
        (newCart[item.id] || 0) >= item.requiredQuantity
      );

      if (isComplete) {
        setEndTime(Date.now());
        setIsGameComplete(true);
      }

      return newCart;
    });
  };

  const getTimeElapsed = () => {
    if (!startTime) return 0;
    if (isGameComplete && endTime) {
      return Math.floor((endTime - startTime) / 1000);
    }
    return elapsedTime;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getCartProgress = (productId) => {
    const item = shoppingList.find(item => item.id === productId);
    if (!item) return 0;
    return (cart[productId] || 0) / item.requiredQuantity;
  };

  return (
    <GameContext.Provider value={{
      shoppingList,
      cart,
      startTime,
      endTime,
      isGameComplete,
      availableProducts,
      generateShoppingList,
      addToCart,
      getTimeElapsed,
      formatTime,
      getCartProgress
    }}>
      {children}
    </GameContext.Provider>
  );
}; 