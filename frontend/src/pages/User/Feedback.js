import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const FeedBack = () => {
    const location = useLocation();
    const { productName } = location.state || { productName: '' };
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the form data here
        console.log('Product:', productName);
        console.log('Rating:', rating);
        // Reset form after submission
        setRating(0);
    };

    return (
        <div className="max-w-xl mx-auto mt-20 flex w-full flex-col border rounded-lg bg-white p-8 ">
            <h2 className="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>
            <p className="mb-5 leading-relaxed text-gray-600">If you had any issues or you liked our product, please share with us!</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="text-sm leading-7 text-gray-600">Product Name</label>
                    <p className="text-base leading-7 text-gray-900">{productName}</p>
                </div>
                <div className="mb-4">
                    <label className="text-sm leading-7 text-gray-600">Rate the Service</label>
                    <div className="flex items-center mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                                key={star}
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-7 h-7 cursor-pointer ${star <= rating ? 'text-indigo-500' : 'text-gray-500'}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                onClick={() => handleRatingChange(star)}
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                            </svg>
                        ))}
                    </div>
                </div>
                <button type="submit" className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">Send</button>
            </form>
            <p className="mt-3 text-xs text-gray-500">Feel free to connect with us on social media platforms.</p>
        </div>
    );
};

export default FeedBack;
