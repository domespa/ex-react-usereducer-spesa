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

  function updateProductQuantity(product, newQuantity) {
    if (newQuantity < 1) return;
    setAddedProducts((prevAddedProducts) => {
      return prevAddedProducts.map((p) =>
        p.name === product.name ? { ...p, quantity: newQuantity } : p
      );
    });
  }

  function removeFromCart(product) {
    setAddedProducts((prevAddedProducts) =>
      prevAddedProducts.filter((p) => p.name !== product.name)
    );
  }

  function calculateTotal() {
    return addedProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
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
            <button onClick={() => updateProductQuantity(c, c.quantity + 1)}>
              Aggiungi unità
            </button>
            <button onClick={() => updateProductQuantity(c, c.quantity - 1)}>
              Rimuovi unità
            </button>
            <button onClick={() => removeFromCart(c)}>
              Togli dal carrello
            </button>
          </li>
        ))}
      </ul>

      <h3>Totale: {calculateTotal().toFixed(2)}€</h3>
    </div>
  );
}
