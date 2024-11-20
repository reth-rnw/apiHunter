
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCart from "./components/ProductCart";

function App() {

  let[list,setList]=useState([]);
  let [cartList,setCartlist]=useState([]);

  useEffect(()=>{

    fetchProduct();
    getCartProducts();
  },[]);

  let fetchProduct=async()=>{
    try {
      let products= await axios.get(`http://localhost:3000/Products`);
      setList(products.data)
    } catch (error) {
      console.error(error);
      
    }

  }
  let handlePost = async (product) => {
    try {
      let res = await axios.post("http://localhost:3000/Products", product);
      console.log(res);
      console.log("data added");
      
    } catch (error) {
      console.error("error");
    }
    fetchProduct();
  };
  let cartProduct=async(index)=>{
    try {
      let product=list[index];
       await axios.post(`http://localhost:3000/cart`,product);
       getCartProducts();
    } catch (error) {
      console.error(error);
      
    }
  }
  let getCartProducts=async()=>{
    try {
      let res=await axios.get(`http://localhost:3000/cart`);
      setCartlist(res.data)
    } catch (error) {
      console.error(error);
      
    }
  }
  let removeItemFromCart= async(id)=>{
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`)
      
    } catch (error) {
      console.error(error);
    }
    getCartProducts();
  }
  

  

  return (
    <>
     <BrowserRouter>
     <Navbar count={cartList.length}/>
     <Routes>
      <Route path="/" element={<Home products={list}  cartProduct={ cartProduct}/>}/>
      <Route path="/addProduct" element={<AddProduct handlePost={handlePost}/>} />
      <Route path="/cart" element={<ProductCart cartList={cartList} removeItemFromCart={removeItemFromCart}/>}/>
     </Routes>


     </BrowserRouter>
    </>
  )
}

export default App
