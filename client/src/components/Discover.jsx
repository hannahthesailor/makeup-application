import React from 'react';
import { Link } from 'react-router-dom';

const Discover = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* Left Side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/4938450/pexels-photo-4938450.jpeg?auto=compress&cs=tinysrgb&w=800" alt="/" />
                <img className='row-span-4 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/6418017/pexels-photo-6418017.jpeg?auto=compress&cs=tinysrgb&w=800" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/4620838/pexels-photo-4620838.jpeg?auto=compress&cs=tinysrgb&w=800" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/8450259/pexels-photo-8450259.jpeg?auto=compress&cs=tinysrgb&w=800" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/8605912/pexels-photo-8605912.jpeg?auto=compress&cs=tinysrgb&w=800" alt="/" />
            </div>
            {/* Right Side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='pb-5 text-xl md:text-6xl font-serif italic'>Find Your Next Must Have</h3>
                <p className='pb-6 font-serif italic'>Embarking on the hunt for your next go-to beauty product is like a thrilling treasure hunt. It's all about finding that one gem – be it a perfect foundation, a volumizing mascara, or a flattering lipstick – that fits your style and makes you feel amazing. With endless options from top brands to hidden gems, each product is a chance to enhance your natural beauty and express yourself. So, dive in with an open mind and let the adventure begin.</p>
                <br /> {/* Line break */}
                <button className='border-black mr-4 hover:shadow-xl' onClick={scrollToTop}>Back to the top</button>
                <Link to="/products"> 
                <button className='border-black mr-4 hover:shadow-xl'>Products</button>
                </Link>
            </div>
        </div>
    )
}

export default Discover;