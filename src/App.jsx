// App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthWrapper } from './useAuth';
import Navbar from './components/Navbar';
import {Home} from './components/Home';
import {Registration} from './components/Registration';
import Login from './components/Login'; // Import the Login component
import {Products} from './components/Products';
import {Cart} from './components/Cart';


function App() {
  return (
    <AuthWrapper>
        <Navbar></Navbar>
        {/* <MyRoutes /> */}
        <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} /> {/* Render the Login component at /login */}
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </AuthWrapper>
  );
}

export default App;