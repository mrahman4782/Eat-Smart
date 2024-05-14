import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    brand: 'Brand 1',
    name: 'Product 1',
    items: [
      { name: 'Apple', count: 2, price: 19.99 },
      { name: 'Banana', count: 1, price: 15.99 }
    ]
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    brand: 'Brand 2',
    name: 'Product 2',
    items: [
      { name: 'Carrot', count: 3, price: 9.99 },
      { name: 'Spinach', count: 1, price: 12.99 }
    ]
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    brand: 'Brand 3',
    name: 'Product 3',
    items: [
      { name: 'Milk', count: 1, price: 9.99 },
      { name: 'Cheese', count: 2, price: 19.99 }
    ]
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    brand: 'Brand 4',
    name: 'Product 4',
    items: [
      { name: 'Broccoli', count: 1, price: 8.99 },
      { name: 'Yogurt', count: 3, price: 6.99 }
    ]
  }
];

// Calculate the discounted price for each product
products.forEach(product => {
  const totalPrice = product.items.reduce((sum, item) => sum + item.price * item.count, 0);
  const discountedPrice = totalPrice * 0.9; // Apply a 10% discount
  product.price = totalPrice.toFixed(2); // Store total price without discount
  product.discountedPrice = discountedPrice.toFixed(2); // Store discounted price
});

const ShowProduct = () => {
  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleProductClick = (product) => {
    navigate('/product/order', { state: { selectedItems: product.items } });
  };

  return (
    <div className='overflow-y-auto h-screen'>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Available Products</h1>
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
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
                        {item.count} {item.name} (${item.price.toFixed(2)} each)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ShowProduct;
