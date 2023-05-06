import "./App.css";
import { useState, useEffect } from "react";
//import productos from "../productos";
import Navbar from "./components/Navbar";
import ProductList from "../src/components/ProductList/Index";
import { Route, Routes } from "react-router-dom";
import db from "../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Header } from "./components/carrito/Header";

function App() {
  //console.log(productos);
  const [productos, setItems] = useState([]);
  const productosRef = collection(db, "Items");

  //Variable de los productos
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const getItems = async () => {
    const productosCollection = await getDocs(productosRef);
    const productos = productosCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setItems(productos);
    //console.log(productos);
  };
  //const productos = productosCollection.docs.map((doc) => ({
  // ...doc.data(),
  // id: doc.id,

  //));

  //console.log(productos);

  useEffect(() => {
    getItems();
  }, []);

  console.log(productos);

  return (
    <div>
      <>
        <Header
          allProducts={productos}
          setAllProducts={setItems}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<h1>ARTICULOS DE ILUMINACION PRINCIPAL</h1>}
          />
          <Route
            path="/Lista"
            element={<ProductList productos={productos} />}
          />
          <Route path="/Grupos" element={<h1>GRUPOS</h1>} />
          <Route path="/Contacto" element={<h1>CONTACTOS</h1>} />
        </Routes>
      </>
    </div>
  );
}

export default App;
