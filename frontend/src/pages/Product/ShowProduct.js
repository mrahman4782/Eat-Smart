import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQuestionCircle, FaAppleAlt } from 'react-icons/fa'; // Import icons from react-icons
import axios from 'axios'; // Import axios for making HTTP requests

const ShowProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://your-backend-endpoint.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('There was an error fetching the products!', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    navigate('/product/order', { state: { selectedItems: product.items } });
  };

  const handleFeedbackClick = (product) => {
    navigate('/user/feedback', { state: { productName: product.name } });
  };

  const handleCaloriesClick = (product) => {
    navigate('/product/nutritionfacts', { state: { nutritionFacts: product.nutritionFacts } });
  };

  return (
    <div className='overflow-y-auto h-screen'>
      <div className="text-center pt-20 pb-10">
        <h1 className="font-bold text-4xl mb-4">Specials</h1>
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt="Product" className="h-80 w-72 object-cover rounded-t-xl cursor-pointer" />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
              <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">${product.discountedPrice}</p>
                </del>
              </div>
              {hoveredProduct === product.id && (
                <div className="mt-2">
                  <h3 className="text-sm font-semibold">Items:</h3>
                  <ul className="list-disc ml-4">
                    {product.items.map((item, index) => (
                      <li key={index} className="text-sm">
                        {item.count} {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="absolute top-2 right-2 flex space-x-2">
              <FaQuestionCircle 
                className="w-6 h-6 text-gray-500 cursor-pointer hover:text-indigo-500" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleFeedbackClick(product);
                }} 
              />
              <FaAppleAlt 
                className="w-6 h-6 text-gray-500 cursor-pointer hover:text-indigo-500" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleCaloriesClick(product);
                }} 
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ShowProduct;
