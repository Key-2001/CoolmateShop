import React from "react";

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./components/HomePage/Home";
import Product from "./components/ProductPage/Product";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Loading from "./pages/Loading";
import Navbar from "./pages/Navbar";
import Cart from "./components/CartPage/Cart";
import Notify from "./components/Notify/Notify";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Notify/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about/:id' element={<About/>}/>
        <Route path='product/:id' element={<SingleProduct/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Loading/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
