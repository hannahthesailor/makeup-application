import React, { useState, useEffect } from "react";
import PagesBackground from "../PagesBackground";

function ProductsHero() {


    return (
        <div>
            <PagesBackground heading='Products:' />
            <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'/>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4 font-bold text-4xl md:text-5xl lg:text-6xl drop-shadow-2xl'>
                    <p>Products</p>
                    <h1 className='font-serif text-base md:text-3xl lg:text-4xl drop-shadow-2xl'>Browse current products below</h1>
                </div>
            </div>
        </div>
        );
    }

export default ProductsHero;