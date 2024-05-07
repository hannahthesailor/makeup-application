import React, { useState } from "react";
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        if(!nav) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'scroll'
        }
    };


    return (
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <h1 className='text-white font-bold text-2xl z-20'>Menu</h1>
            <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
            <div 
            className={
                nav 
                ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10' 
                : 'absolute top-0 h-screen left-[-100%] z-10'}>
                <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                    <li className='font-bold text-3xl p-8'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='font-bold text-3xl p-8'>
                        <Link to="/products">Products</Link>
                    </li>
                    <li className='font-bold text-3xl p-8'>
                        <Link to="/reviews">Reviews</Link>
                        </li>
                    <li className='font-bold text-3xl p-8'>
                        <Link to="/wishListItems">Wish List Items</Link>
                        </li>
                    <li className='font-bold text-3xl p-8'>
                        <Link to="/Logins">Login</Link></li>

                    <li className='font-bold text-3xl p-8'>
                        <Link to="/NewReviewForm">Leave A Review</Link></li>
                        <li className='font-bold text-3xl p-8'>
                        <Link to="/DeleteReviews">Delete Or Edit A Review</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
