import React from "react";

const products = [
  { name: "Mela", price: 0.5 },
  { name: "Pane", price: 1.2 },
  { name: "Latte", price: 1.0 },
  { name: "Pasta", price: 0.7 },
];

export default function ProductList() {
  return (
    <div>
      <h2>Lista Prodotti</h2>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <strong>Nome</strong>: {p.name} - Prezzo: {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
