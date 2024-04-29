import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <div className='w-full h-screen'>
            <img 
            className ='top-0 left-0 width-full h-screen object-cover' 
            src="https://images.pexels.com/photos/7290674/pexels-photo-7290674.jpeg" 
            alt="/" 
            />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/> 
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                    <p>Makeup or Breakup</p>
                        <h1 className='font-bold text-4xl md:text7xl drop-shadow-2xl'>Discover beauty's best and leave uncertainty behind</h1>
                    <p className='max-w-[600p]  drop-shadow-2xl py-2 text-l'>
Introducing "Makeup or Breakup" – your go-to app for all things beauty. Explore a wide range of makeup products from top brands and new releases with ease. Want to know if a product is worth it? Read reviews from other users to help you decide. Plus, you can leave your own reviews to share your experience with the community. Don't forget to create your wishlist to keep track of your must-have items. Whether you're a makeup pro or just starting out, "Makeup or Breakup" is here to make your beauty journey fun and effortless.
                    </p>
                    <Link to="/products"> {/* Add Link to Products page */}
                        <button className='bg-white text-black'>Check out our current products</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;