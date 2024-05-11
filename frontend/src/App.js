import {BrowserRouter as Router, Switch, Routes, Route, Link} from "react-router-dom";
import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/home';
import Landing from './pages/Landing/landing';
import Register from './pages/Register/register';
import Login from './pages/Login/login';

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
      </Routes>
    </Router>
  );
}

export default App;
