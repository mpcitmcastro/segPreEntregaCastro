import "./App.css";
import { useState } from "react";
import productos from "../productos";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { Route, Routes } from "react-router-dom";

function App() {
  console.log(productos);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>ARTICULOS DE ILUMINACION PRINCIPAL</h1>} />
        <Route path="/Lista" element={<ProductList productos={productos} />} />
        <Route path="/Grupos" element={<h1>GRUPOS</h1>} />
        <Route path="/Contacto" element={<h1>CONTACTOS</h1>} />
      </Routes>
    </div>
  );
}

export default App;
