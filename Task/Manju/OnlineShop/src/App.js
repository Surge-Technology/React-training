import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import React from "react";
import Form from "./Form";
import Invoice from "./components/invoice";
import Paymentpage from "./components/payment";
import Table from "./components/Product";
function App() {
  return (
    <div className="App">
    <Form/>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
      <Invoice/>
      <Paymentpage/>
      <Table/>
    </div>
  );
}

export default App;
