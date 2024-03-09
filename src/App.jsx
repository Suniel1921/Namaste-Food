import React from 'react'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/Home/Home';
import Offer from './pages/offer/Offer';
import Cart from './pages/cart/Cart';

const App = () => {
  return (
    <>
    <div className='container'>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/offer' element={<Offer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>

    </div>
    </>
  )
}

export default App