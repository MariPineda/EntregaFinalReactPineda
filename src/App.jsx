import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
        <NavBar/>
          <Routes>
            <Route path="/" element = { <ItemListContainer/> }/>
            <Route path="/categoria/:idCategory" element = { <ItemListContainer/> }/>
            <Route path="item/:idItem" element = { <ItemDetailContainer/> }/>
            <Route path="/cart" element = { <Cart/> }/>
            <Route path="/checkout" element = {<Checkout/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
