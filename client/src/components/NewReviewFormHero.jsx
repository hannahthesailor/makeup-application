import React, { useState, useEffect } from "react";
import AlternateBackground from "./AlternateBackground";

export const setReviews = () => {};
export const reviews = [];

const NewReviewFormHero = () => {
    const [rating, setRating] = useState(1);
    const [text, setText] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");
    const [selectedUser, setSelectedUser] = useState("");
    const [productsData, setProductsData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [reviewPosted, setReviewPosted] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5555/products");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProductsData(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        const fetchUsers = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5555/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                setUsersData(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

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

        fetchProducts();
        fetchUsers();
        fetchReviews();
    }, []);

    // submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!selectedUser || !selectedProduct) {
                throw new Error("Please select a user and a product");
            }
    
            const response = await fetch("http://127.0.0.1:5555/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    rating,
                    text,
                    product: selectedProduct,
                    user: selectedUser
                })
            });
    
            if (!response.ok) {
                throw new Error("Failed to submit review");
            }

            setReviewPosted(true);
    
            const reviewData = await response.json();
            setReviews([...reviews, reviewData]);
         } catch (error) {
                console.error("Error submitting review:", error);
            }
};
    
    

    return (
        
        <div>
            <AlternateBackground heading="Products:" />
            <div className="bg-black/20 absolute top-0 left-0 w-full h-screen">
                <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">

                    {/* User select */}
                    <div className="relative mb-6">
                        <select
                        className="peer block w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                        id="user"
                        value={selectedUser}
                        onChange={(e) => setSelectedUser(e.target.value)}>
                        <option value="">Select a user</option>
                        {usersData.map((user) => (
                            <option key={user.id} value={user.id}>{user.username}</option>
                        ))}
                        </select>
                        <label htmlFor="user" className="pointer-events-none absolute left-3 top-0 max-w-[90%] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:text-primary"></label>
                    </div>

                    {/* Product */}
                    <div className="relative mb-6">
                        <select
                        className="peer block w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                        id="product"
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}>
                        <option value="">Select a product</option>
                        {productsData.map((product) => (
                            <option key={product.id} value={product.id}>{product.name}</option>
                        ))}
                        </select>
                        <label htmlFor="product" className="pointer-events-none absolute left-3 top-0 max-w-[90%] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:text-primary"></label>
                    </div>
                    
                    </div>

                    {/* Rating */}
                    <div className="relative mb-6">
                    <input
                        type="number"
                        className="peer block w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                        id="rating"
                        name="rating"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                        placeholder="Rating"
                    />
                    <label htmlFor="rating" className="pointer-events-none absolute left-3 top-0 max-w-[90%] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:text-primary"></label>
                    </div>

                    {/* Description  */}
                    <div className="relative mb-6">
                    <textarea
                        className="peer block w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                        id="text"
                        name="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Description"
                    />
                    <label htmlFor="text" className="pointer-events-none absolute left-3 top-0 max-w-[90%] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:text-primary"></label>
                    </div>

                    {reviewPosted && (
                            <div className="text-green-600 font-bold mb-4">
                                Your review was successfully posted!
                            </div>
                        )}

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="btn-primary"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                        >
                            Submit
                        </button>
                </form>
                </div>
            </div>
            </div>

      
        // <div>
        //     <AlternateBackground heading="Products:" />
        //     <div className="bg-black/20 absolute top-0 left-0 w-full h-screen" />
        //     <div className="absolute top-0 w-full h-full flex flex-col justify-center">
        //         <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4 font-bold text-4xl md:text7xl drop-shadow-2xl text-black">
        //             <p>Leave a Review</p>
        //             <h1 className="font-serif text-xl md:tex4xl drop-shadow-2xl">Fill out the review form below!</h1>
        //             <form onSubmit={handleSubmit}>
        //                 <label htmlFor="rating">Rating:</label>
        //                 <input
        //                     type="number"
        //                     id="rating"
        //                     name="rating"
        //                     min="1"
        //                     max="5"
        //                     value={rating}
        //                     onChange={(e) => setRating(parseInt(e.target.value))}
        //                 />
        //                 <br />
        //                 <label htmlFor="text">Description:</label>
        //                 <textarea
        //                     id="text"
        //                     name="text"
        //                     value={text}
        //                     onChange={(e) => setText(e.target.value)}
        //                 />
        //                 <br />
        //                 <label htmlFor="product">Product:</label>
        //                 <select
        //                     id="product"
        //                     name="product"
        //                     value={selectedProduct}
        //                     onChange={(e) => setSelectedProduct(e.target.value)}
        //                 >
        //                     <option value="">Select a product</option>
        //                     {productsData.map((product) => (
        //                         <option key={product.id} value={product.id}>
        //                             {product.name}
        //                         </option>
        //                     ))}
        //                 </select>
        //                 <br />
        //                 <label htmlFor="user">User:</label>
        //                 <select
        //                     id="user"
        //                     name="user"
        //                     value={selectedUser}
        //                     onChange={(e) => setSelectedUser(e.target.value)}
        //                 >
        //                     <option value="">Select a user</option>
        //                     {usersData.map((user) => (
        //                         <option key={user.id} value={user.id}>
        //                             {user.username}
        //                         </option>
        //                     ))}
        //                 </select>
        //                 <br />
        //                 <button type="submit">Submit</button>
        //             </form>
        //         </div>
        //     </div>
        // </div>
    );
};

export default NewReviewFormHero;
