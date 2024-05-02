import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar.jsx';
import Guarantee from './components/Guarantee.jsx';
import Discover from './components/Discover.jsx';
import Products from './components/Products.jsx';
import Reviews from './components/Reviews.jsx';
import WishListItem from './components/WishListItems.jsx';
import Logins from './components/Logins.jsx';
import NewReviewForm from './components/NewReviewForm.jsx';

function App() {


  return (
    <BrowserRouter> 
      <div>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/wishListItems" element={<WishListItem />} />
          <Route path="/logins" element={<Logins />} />
          <Route path="/newreviewform" element={<NewReviewForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


function Home() {
  return (
    <>
      <Hero />
      <Guarantee />
      <Discover />
    </>
  );
}

export default App;
