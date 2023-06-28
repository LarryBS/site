import React from 'react';
import './CategoryPanel.css';

const CategoryPanel = () => {
  return (
    <div className="category-panel">
      <div className="category-item">
        <img src="path-to-product-image" alt="Product 1" />
        <h3>Product 1</h3>
        <p>Description of Product 1</p>
      </div>
      <div className="category-item">
        <img src="path-to-product-image" alt="Product 2" />
        <h3>Product 2</h3>
        <p>Description of Product 2</p>
      </div>
      <div className="category-item">
        <img src="path-to-product-image" alt="Product 3" />
        <h3>Product 3</h3>
        <p>Description of Product 3</p>
      </div>
      <div className="category-item">
        <img src="path-to-product-image" alt="Product 4" />
        <h3>Product 4</h3>
        <p>Description of Product 4</p>
      </div>
      <div className="category-item">
        <img src="path-to-product-image" alt="Product 5" />
        <h3>Product 5</h3>
        <p>Description of Product 5</p>
      </div>
    </div>
  );
};

export default CategoryPanel;
