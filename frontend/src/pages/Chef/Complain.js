import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const foodData = [
  {
    type: 'Fruits',
    items: [
      { name: 'Apple', price: 19.99 },
      { name: 'Banana', price: 15.99 },
      { name: 'Orange', price: 12.99 }
    ]
  },
  {
    type: 'Vegetables',
    items: [
      { name: 'Carrot', price: 9.99 },
      { name: 'Broccoli', price: 8.99 },
      { name: 'Spinach', price: 12.99 }
    ]
  },
  {
    type: 'Dairy',
    items: [
      { name: 'Milk', price: 9.99 },
      { name: 'Cheese', price: 19.99 },
      { name: 'Yogurt', price: 6.99 }
    ]
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
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Complain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [complaintText, setComplaintText] = useState('');

  useEffect(() => {
    if (location.state && location.state.selectedItems) {
      setSelectedItems(location.state.selectedItems);
    }
  }, [location.state]);

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const handleItemClick = (item) => {
    const existingItem = selectedItems.find(selectedItem => selectedItem.name === item.name);
    if (!existingItem) {
      setSelectedItems([...selectedItems, { ...item, count: 1 }]);
    }
  };

  const handleItemRemove = (itemName) => {
    setSelectedItems(selectedItems.filter(item => item.name !== itemName));
  };

  const handleComplaintChange = (e) => {
    setComplaintText(e.target.value);
  };

  const handleSendComplaint = async () => {
    try {
      const token = 'your-auth-token-here'; // Replace with the actual token
      const response = await fetch('/api/submitComplaint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          token,
          complaintText,
          selectedItems
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Complaint submitted:', data);
        navigate('/product/checkout', { state: { selectedItems } });
      } else {
        console.error('Error submitting complaint:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
  };

  const isSendComplaintDisabled = selectedItems.length === 0 || complaintText.trim() === '';

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
              <span className="text-2xl font-bold">{item.count}</span>
            </div>
          </li>
        ))}
      </ul>
      <textarea
        className="w-full max-w-xl border border-indigo-400 rounded-lg p-3 dark:bg-gray-800 dark:text-gray-300"
        rows="4"
        placeholder="Write your complaint here..."
        value={complaintText}
        onChange={handleComplaintChange}
      />
      <button
        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full ${isSendComplaintDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleSendComplaint}
        disabled={isSendComplaintDisabled}
      >
        Send Complaint
      </button>
    </div>
  );
};

export default Complain;
