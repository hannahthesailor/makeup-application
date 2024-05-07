import React, { useState, useEffect } from 'react';
import AlternateBackground from './AlternateBackground';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);
    const [editedRating, setEditedRating] = useState('');
    const [editedText, setEditedText] = useState('');

    useEffect(() => {
        fetchReviews();
    }, []);

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

    const handleDeleteReview = async (review) => {
        try {
            const response = await fetch(`http://127.0.0.1:5555/reviews/${review.id}`, {
                method: "DELETE"
            });
            if (response.ok) {
                setReviews(reviews.filter(function(reviewElement) {
                    return reviewElement.id !== review.id;
                }));
            } else {
                console.error("Error deleting review:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting review:", error);
        }
    };

    const handleEditReview = (review) => {
        setSelectedReview(review);
        setEditedRating(review.rating);
        setEditedText(review.text);
    };

    const handleSubmitEdit = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5555/reviews/${selectedReview.id}`, {
                method: "PATCH", 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rating: parseInt(editedRating), 
                    text: editedText
                })
            });
            if (response.ok) {
                // Reload page
                window.location.reload();
            } else {
                alert("Error updating review");
            }
        } catch (error) {
            console.error("Error updating review:", error);
        }
    };
    

    return (
        <div>
            <AlternateBackground stationary heading="Reviews" />
            <div className="reviews-container">
                <ul>
                    {reviews.map(review => (
                        <li key={review.id}>
                            <p>{review.text}</p>
                            <p>Rating: {review.rating}</p>
                            <button onClick={() => handleDeleteReview(review)}>Delete</button>
                            <button onClick={() => handleEditReview(review)}>Edit</button>
                        </li>
                    ))}
                </ul>
            </div>
            {selectedReview && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Edit Review</h2>
                        <input 
                            type="number" 
                            value={editedRating} 
                            onChange={(e) => setEditedRating(e.target.value)} 
                        />
                        <textarea 
                            value={editedText} 
                            onChange={(e) => setEditedText(e.target.value)} 
                        />
                        <button onClick={handleSubmitEdit}>Submit</button>
                        <button onClick={() => setSelectedReview(null)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewsPage;
