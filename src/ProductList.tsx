import React from 'react'
import './ProductList.css'

export const ProductList = () => {
  return (
    <div>
      <header>
        <h2>Shop</h2>
      </header>
      <div>
            <p data-testid="product-1">Product 1</p>
            <p>Product 2</p>
            <p>Product 3</p>
            <p>Product 4</p>
      </div>
    </div>
  );
};


