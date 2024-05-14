import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CheckOut = () => {
  const location = useLocation();
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (location.state && location.state.selectedItems) {
      setSelectedItems(location.state.selectedItems);
    }
  }, [location.state]);

  const incrementCount = (itemName) => {
    setSelectedItems((prevItems) => 
      prevItems.map(item =>
        item.name === itemName ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementCount = (itemName) => {
    setSelectedItems((prevItems) => 
      prevItems.map(item =>
        item.name === itemName && item.count > 0 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  const getTotal = () => {
    const subtotal = selectedItems.reduce((acc, item) => acc + item.price * item.count, 0);
    const taxes = subtotal * 0.1; // Example tax calculation (10%)
    return {
      subtotal,
      taxes,
      shipping: 0,
      total: subtotal + taxes
    };
  };

  const totals = getTotal();

  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              {selectedItems.length > 0 && (
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedItems.map((item, index) => (
                      <tr key={index}>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img className="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product" />
                            <span className="font-semibold">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-4">${item.price.toFixed(2)}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              className="border rounded-md py-2 px-4 mr-2"
                              onClick={() => decrementCount(item.name)}
                            >
                              -
                            </button>
                            <span className="text-center w-8">{item.count}</span>
                            <button
                              className="border rounded-md py-2 px-4 ml-2"
                              onClick={() => incrementCount(item.name)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4">${(item.price * item.count).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totals.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>${totals.taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${totals.shipping.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${totals.total.toFixed(2)}</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
