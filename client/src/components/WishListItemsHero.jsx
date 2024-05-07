import React, { useState, useEffect } from "react";
import AlternateBackground from "./AlternateBackground";

function WishListItemsHero({ loggedInUserId }) {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        fetchWishlistItems();
    }, []);

    const fetchWishlistItems = async () => {
        try {
            const response = await fetch(`http://localhost:5555/wishlist_items?user_id=${loggedInUserId}`);
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
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='max-w-[1100px] mx-auto p-4 font-bold text-4xl'>
                    <p>Wishlist</p>
                    <h1 className='text-xl md:text-3xl lg:text-4xl mt-2'>Everything you love for your next shopping trip!</h1>
                </div>
            </div>
            {/* Render wishlist items */}
            <div className="grid grid-cols-2 gap-4 mt-4">
                {wishlistItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <img src={item.product_image} alt={item.product_name} className="w-24 h-24 mr-4" />
                        <p>{item.product_name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WishListItemsHero;
