import React, { useState } from 'react';

const foodData = [
  {
    type: 'Fruits',
    items: ['Apple', 'Banana', 'Orange']
  },
  {
    type: 'Vegetables',
    items: ['Carrot', 'Broccoli', 'Spinach']
  },
  {
    type: 'Dairy',
    items: ['Milk', 'Cheese', 'Yogurt']
  }
];

const Dropdown = ({ type, items, isOpen, toggleDropdown, onItemClick }) => (
  <div className="dropdown inline-block relative mx-2">
    <button
      className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-2 px-4 rounded inline-flex items-center"
      onClick={toggleDropdown}
    >
      <span className="mr-1">{type}</span>
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </button>
    {isOpen && (
      <ul className="dropdown-menu absolute text-gray-700 dark:text-gray-300 pt-1">
        {items.map((item, index) => (
          <li key={index}>
            <a
              className="bg-gray-200 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap cursor-pointer"
              onClick={() => onItemClick(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const OrderProduct = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const handleItemClick = (item) => {
    if (!selectedItems.some(selectedItem => selectedItem.name === item)) {
      setSelectedItems((prevItems) => [
        ...prevItems,
        { name: item, count: 1 }
      ]);
    }
  };

  const handleItemRemove = (itemName) => {
    setSelectedItems((prevItems) => prevItems.filter(item => item.name !== itemName));
  };

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
        item.name === itemName && item.count > 1 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  return (
    <div className="flex flex-col w-full justify-center items-center h-screen dark:bg-gray-900 space-y-5">
      <div className="flex space-x-3">
        {foodData.map((foodCategory, index) => (
          <Dropdown
            key={index}
            type={foodCategory.type}
            items={foodCategory.items}
            isOpen={openDropdown === foodCategory.type}
            toggleDropdown={() => toggleDropdown(foodCategory.type)}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
      <ul className="space-y-3 text-lg border border-2 border-indigo-400 rounded-lg p-5 w-full max-w-xl">
        {selectedItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between group cursor-pointer"
            onClick={() => handleItemRemove(item.name)}
          >
            <div className="flex items-center space-x-3">
              <svg className="flex-shrink-0 h-6 w-6 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor" />
              </svg>
              <span className="text-gray-800 dark:text-gray-400 group-hover:text-red-600">
                {item.name}
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <button
                className="flex justify-center items-center w-8 h-8 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500"
                onClick={(e) => { e.stopPropagation(); decrementCount(item.name); }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                </svg>
              </button>
              <span className="text-2xl font-bold">{item.count}</span>
              <button
                className="flex justify-center items-center w-8 h-8 rounded-full text-white focus:outline-none bg-indigo-500 hover:bg-indigo-600"
                onClick={(e) => { e.stopPropagation(); incrementCount(item.name); }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12"></path>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedItems.length > 0 && (
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Pay Now
        </button>
      )}
    </div>
  );
};

export default OrderProduct;
