import {BrowserRouter as Router, Switch, Routes, Route, Link} from "react-router-dom";
import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/home';
import Landing from './pages/Landing/landing';
import Register from './pages/Register/register';
import Login from './pages/Login/login';
import ShowProduct from './pages/Product/ShowProduct';
import CreateProduct from './pages/Product/CreateProduct';
import OrderProduct from "./pages/Product/OrderProduct";
import CheckOut from "./pages/Product/CheckOut";
import Ordered from "./pages/User/Ordered";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('surfer');

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        // Products
        <Route path='/product/show' element={<ShowProduct/>} />
        <Route path='/product/create' element={<CreateProduct/>} />
        <Route path='/product/order' element={<OrderProduct/>} />
        <Route path='/product/checkout' element={<CheckOut/>} />
        // User
        <Route path='/user/ordered' element={<Ordered/>} />

      </Routes>
    </Router>
  );
}

export default App;