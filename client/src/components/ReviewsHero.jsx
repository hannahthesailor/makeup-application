import React from "react";
import PagesBackground from "../PagesBackground";

 const ReviewsHero = () => {
    return(
        <div>
            <PagesBackground heading='Products:' />
            <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'/> 
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4 font-bold text-4xl md:text7xl drop-shadow-2xl'>
                    <p>Reviews</p>
                        <h1 className='font-serif text-xl md:tex4xl drop-shadow-2xl'>Love it? Hate it? Let us know below!</h1>
                </div>
            </div>
        </div>
    )
 }

 export default ReviewsHero;