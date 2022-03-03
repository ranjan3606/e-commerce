import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Product from './Component/Main/Product'
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home'
import Men from './Component/Pages/Men';
import Women from './Component/Pages/Women';
import Other from './Component/Pages/Other';
import './App.css';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" excat element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/other" element={<Other />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
