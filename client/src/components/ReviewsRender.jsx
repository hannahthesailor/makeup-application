import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function ReviewsRender() {
    
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5555/reviews");
            if (!response.ok) {
                throw new Error('Failed to fetch reviews');
            }
            const data = await response.json();
            setReviews(data);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []); 
    console.log(reviews); 

    return (
        <div>
            <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {reviews.map(review => (
                    <li key={review.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-1">
                            <div className="border-t mt-2 pt-2">
                                <div className="flex items-center mb-1">
                                    <p className="text-sm font-semibold">{review.rating}/5</p>
                                </div>
                                <p className="text-sm">{review.text}</p>
                            </div>
                        </div>
                    </li>
                ))}
                <div className="mt-4">
                    <Link to="/reviews">
                        <button className='border py-2 px-4 rounded-full bg-white text-black hover:bg-gray-200'>Leave a Review</button>
                    </Link>
                </div>
            </ul>
        </div>
    );
}

export default ReviewsRender;
