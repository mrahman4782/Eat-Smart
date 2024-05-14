import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQuestionCircle, FaAppleAlt } from 'react-icons/fa'; // Import icons from react-icons

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    brand: 'Brand 1',
    name: 'Product 1',
    price: 149,
    discountedPrice: 199,
    items: [
      { name: 'Apple', count: 2, price: 19.99 },
      { name: 'Banana', count: 1, price: 15.99 }
    ],
    nutritionFacts: {
      servingSize: '1 cup (240g)',
      calories: 200,
      totalFat: '10g',
      saturatedFat: '2g',
      transFat: '0g',
      cholesterol: '20mg',
      sodium: '300mg',
      totalCarbohydrates: '20g',
      dietaryFiber: '2g',
      sugars: '4g',
      protein: '10g',
      vitaminA: '8%',
      vitaminC: '2%',
      calcium: '6%',
      iron: '4%',
    }
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    brand: 'Brand 2',
    name: 'Product 2',
    price: 129,
    discountedPrice: 149,
    items: [
      { name: 'Carrot', count: 3, price: 9.99 },
      { name: 'Spinach', count: 1, price: 12.99 }
    ],
    nutritionFacts: {
      servingSize: '1 cup (240g)',
      calories: 150,
      totalFat: '5g',
      saturatedFat: '1g',
      transFat: '0g',
      cholesterol: '10mg',
      sodium: '200mg',
      totalCarbohydrates: '15g',
      dietaryFiber: '3g',
      sugars: '5g',
      protein: '8g',
      vitaminA: '10%',
      vitaminC: '5%',
      calcium: '8%',
      iron: '3%',
    }
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    brand: 'Brand 3',
    name: 'Product 3',
    price: 99,
    discountedPrice: 129,
    items: [
      { name: 'Milk', count: 1, price: 9.99 },
      { name: 'Cheese', count: 2, price: 19.99 }
    ],
    nutritionFacts: {
      servingSize: '1 cup (240g)',
      calories: 180,
      totalFat: '8g',
      saturatedFat: '3g',
      transFat: '0g',
      cholesterol: '15mg',
      sodium: '250mg',
      totalCarbohydrates: '12g',
      dietaryFiber: '1g',
      sugars: '10g',
      protein: '12g',
      vitaminA: '12%',
      vitaminC: '0%',
      calcium: '20%',
      iron: '5%',
    }
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    brand: 'Brand 4',
    name: 'Product 4',
    price: 199,
    discountedPrice: 249,
    items: [
      { name: 'Broccoli', count: 1, price: 8.99 },
      { name: 'Yogurt', count: 3, price: 6.99 }
    ],
    nutritionFacts: {
      servingSize: '1 cup (240g)',
      calories: 220,
      totalFat: '12g',
      saturatedFat: '4g',
      transFat: '0g',
      cholesterol: '25mg',
      sodium: '350mg',
      totalCarbohydrates: '18g',
      dietaryFiber: '2g',
      sugars: '8g',
      protein: '14g',
      vitaminA: '15%',
      vitaminC: '8%',
      calcium: '10%',
      iron: '6%',
    }
  }
];


const ShowProduct = () => {
  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = useState(null);

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
