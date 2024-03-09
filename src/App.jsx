import React from 'react'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/Home/Home';
import Offer from './pages/offer/Offer';
import Cart from './pages/cart/Cart';
import Error from './components/error/Error';
import ResturantMenu from './components/resturantMenu/ResturantMenu';

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
        <Route path='/resturant/:resId' element={<ResturantMenu/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>

    </div>
    </>
  )
}

export default App