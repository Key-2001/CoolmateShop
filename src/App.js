import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./components/HomePage/Home";
import Product from "./components/ProductPage/Product";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Footer from "./pages/Footer";
import Loading from "./pages/Loading";
import Navbar from "./pages/Navbar";
import Cart from "./components/CartPage/Cart";
import Story from "./pages/About/Story";
import Service from "./pages/About/Service";
import Customer from "./pages/About/Customer";
import Notify from "./components/Notify/Notify";
import Login from "./components/LoginPage/Login";
import Account from "./components/LoginPage/Account";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Notify/>
      <Login/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/about/story' element={<Story/>}/>
        <Route path='/about/service' element={<Service/>}/>
        <Route path='/about/customer' element={<Customer/>}/>
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
