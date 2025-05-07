import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import AccessiblePage from './pages/AccessiblePage';
import NonAccessiblePage from './pages/NonAccessiblePage';
import NonAccessibleProductItem from './components/NonAccessibleProductItem';
import AccessibleProductItem from './components/AccessibleProductItem';

const products = [
  {
    id: 1,
    name: 'Organic Whole Milk',
    price: 3.99,
    description: 'Fresh organic whole milk, 1 gallon',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200'
  },
  {
    id: 2,
    name: 'Free Range Eggs',
    price: 4.49,
    description: 'Dozen large free-range eggs',
    image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=200'
  },
  {
    id: 3,
    name: 'Whole Grain Bread',
    price: 2.99,
    description: 'Freshly baked whole grain bread loaf',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200'
  },
  {
    id: 4,
    name: 'Organic Bananas',
    price: 0.69,
    description: 'Organic bananas, per pound',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=200'
  },
  {
    id: 5,
    name: 'Fresh Spinach',
    price: 2.49,
    description: 'Organic baby spinach, 5 oz bag',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200'
  },
  {
    id: 6,
    name: 'Greek Yogurt',
    price: 1.99,
    description: 'Plain Greek yogurt, 32 oz',
    image: 'https://images.unsplash.com/photo-1570194065653-4b0a6b3a0c3b?w=200'
  },
  {
    id: 7,
    name: 'Ground Coffee',
    price: 8.99,
    description: 'Premium ground coffee, 12 oz',
    image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=200'
  },
  {
    id: 8,
    name: 'Organic Apples',
    price: 1.99,
    description: 'Organic Gala apples, per pound',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200'
  },
  {
    id: 9,
    name: 'Almond Milk',
    price: 3.49,
    description: 'Unsweetened almond milk, 64 oz',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200'
  },
  {
    id: 10,
    name: 'Cheddar Cheese',
    price: 4.99,
    description: 'Sharp cheddar cheese, 8 oz block',
    image: 'https://images.unsplash.com/photo-1582456891955-9a8a3b27a2c9?w=200'
  },
  {
    id: 11,
    name: 'Organic Carrots',
    price: 1.49,
    description: 'Organic carrots, 1 lb bag',
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?w=200'
  },
  {
    id: 12,
    name: 'Fresh Salmon',
    price: 12.99,
    description: 'Fresh Atlantic salmon fillet, per pound',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200',
    inStock: false
  },
  {
    id: 13,
    name: 'Organic Tomatoes',
    price: 2.99,
    description: 'Organic vine-ripened tomatoes, per pound',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200'
  },
  {
    id: 14,
    name: 'Whole Chicken',
    price: 8.99,
    description: 'Whole organic chicken, 3-4 lbs',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200'
  },
  {
    id: 15,
    name: 'Brown Rice',
    price: 2.49,
    description: 'Organic brown rice, 1 lb bag',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200'
  },
  {
    id: 16,
    name: 'Fresh Basil',
    price: 2.99,
    description: 'Fresh organic basil, 1 oz',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=200'
  },
  {
    id: 17,
    name: 'Organic Strawberries',
    price: 4.99,
    description: 'Organic strawberries, 1 lb',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200'
  },
  {
    id: 18,
    name: 'Extra Virgin Olive Oil',
    price: 9.99,
    description: 'Premium extra virgin olive oil, 16.9 oz',
    image: 'https://images.unsplash.com/photo-1601180964526-fa9c3b7a0a1a?w=200'
  },
  {
    id: 19,
    name: 'Organic Potatoes',
    price: 1.99,
    description: 'Organic russet potatoes, 3 lb bag',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200'
  },
  {
    id: 20,
    name: 'Fresh Mozzarella',
    price: 3.99,
    description: 'Fresh mozzarella cheese, 8 oz',
    image: 'https://images.unsplash.com/photo-1582456891955-9a8a3b7a2c9?w=200'
  }
];

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Grocery Store Showcase</h1>
          <p>Compare the accessible and non-accessible versions of our grocery store.</p>
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<Navigate to="/accessible" replace />} />
          <Route path="/accessible" element={<AccessiblePage />} />
          <Route path="/non-accessible" element={<NonAccessiblePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 