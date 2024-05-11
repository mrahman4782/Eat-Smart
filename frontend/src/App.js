import {BrowserRouter as Router, Switch, Routes, Route, Link} from "react-router-dom";
import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/home';
import Landing from './pages/Landing/landing';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('surfer');
  const {routeName, setRouteName} = useState('');

  const getRouteName = (route) => {
    setRouteName(`${route}`);
  }

  return (
    <Router>
      <Navbar loggedIn={isLoggedIn} page={routeName}/>
      <Routes>
        <Route path='/' element={<Landing/>} />
      </Routes>
    </Router>
  );
}

export default App;
