import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function ProductsRender() {
    // State to store the product data
    const [products, setProducts] = useState([]);

    // Function to fetch product data from the backend API
    const fetchProducts = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5555/products");
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []); 
    console.log(products); 

    return (
        <div>
                    {/* Render product data */}
                    <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {products.map(product => (
                            <li key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-auto max-w-full max-h-24" />
                                <div className="p-1">
                                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">{product.name}</h2>
                                    <p className="text-sm md:text-base lg:text-lg text-gray-600">Brand: {product.brand}</p>
                                    <p className="text-sm md:text-base lg:text-lg text-gray-600">Category: {product.category}</p>
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

export default ProductsRender;
