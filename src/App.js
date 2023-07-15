import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./component/Cart";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Products from "./component/Products";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
