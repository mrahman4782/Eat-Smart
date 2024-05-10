import {BrowserRouter as Router, Switch, Routes, Route, Link} from "react-router-dom";
import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/home';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar loggedIn={isLoggedIn} />
      <Routes>
        <Route path='/' exact component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
