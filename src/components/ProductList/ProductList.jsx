import React from "react";
import { useState } from "react";

const products = [
  { name: "Mela", price: 0.5 },
  { name: "Pane", price: 1.2 },
  { name: "Latte", price: 1.0 },
  { name: "Pasta", price: 0.7 },
];
export default function ProductList() {
  const [addedProducts, setAddedProducts] = useState([]);

  function addToCart(product) {
    setAddedProducts((prevAddedProducts) => {
      const productIn = prevAddedProducts.find((p) => p.name === product.name);

      if (productIn) {
        return prevAddedProducts.map((p) =>
          p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevAddedProducts, { ...product, quantity: 1 }];
      }
    });
  }

  return (
    <div>
      <h2>Lista Prodotti</h2>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <strong>Nome</strong>: {p.name} - Prezzo: {p.price}{" "}
            <button onClick={() => addToCart(p)}>Aggiungi al carrello</button>
          </li>
        ))}
      </ul>

      <h4>Carrello</h4>
      <ul>
        {addedProducts.map((c, i) => (
          <li key={i}>
            {c.name} - {c.price}€ - Pezzi {c.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
