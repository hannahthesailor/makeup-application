import React, { useState, useEffect } from "react";
import AlternateBackground from "./AlternateBackground";

function WishListItemsHero() {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        fetchWishlistItems();
    }, []);

    const fetchWishlistItems = async () => {
        try {
            const response = await fetch("http://localhost:5555/wishlist_items");
            if (!response.ok) {
                throw new Error('Failed to fetch wishlist items');
            }
            const data = await response.json();
            setWishlistItems(data);
        } catch (error) {
            console.error("Error fetching wishlist items:", error);
        }
    };

    return (
        <div>
            <AlternateBackground heading='Wishlist:' />
            <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'/>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4 font-bold text-4xl md:text-5xl lg:text-6xl drop-shadow-2xl'>
                    <p>Wishlist</p>
                    <h1 className='font-serif text-base md:text-3xl lg:text-4xl drop-shadow-2xl'>Everything you love for your next shopping trip!</h1>
                    {/* Render wishlist table */}
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product ID</th>
                                <th>User ID</th>
                                <th>Product Name</th>
                                <th>Product Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlistItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.product_name}</td>
                                    <td><img src={item.product_image} alt={item.product_name} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default WishListItemsHero;
