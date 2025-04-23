import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Royal Furry Haven</h1>
        <div>
          {products.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
