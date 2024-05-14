import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({ items, isOpen, toggleDropdown, onItemClick }) => (
  <div className="dropdown inline-block relative mx-2">
    <button
      className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-2 px-4 rounded inline-flex items-center"
      onClick={toggleDropdown}
    >
      <span className="mr-1">{isOpen ? "Select Chef" : "Chefs"}</span>
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

const ComplainImporter = () => {
  const navigate = useNavigate();
  const [chefs, setChefs] = useState([]);
  const [selectedChef, setSelectedChef] = useState(null);
  const [complaintText, setComplaintText] = useState('');
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    // Fetch chefs from the API when the component mounts
    const fetchChefs = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/chefs');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched chefs:', data); // Log fetched data
        setChefs(data);
      } catch (error) {
        console.error('Error fetching chefs:', error);
      }
    };

    fetchChefs();
  }, []);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleChefClick = (chef) => {
    setSelectedChef(chef);
    setOpenDropdown(false);
  };

  const handleComplaintChange = (e) => {
    setComplaintText(e.target.value);
  };

  const handleSendComplaint = async () => {
    if (!selectedChef || !complaintText.trim()) return;

    try {
      const token = 'your-auth-token-here'; // Replace with the actual token
      const response = await fetch('http://localhost:3001/api/submitImporterComplaint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          token,
          complaintText,
          chefId: selectedChef.id
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Complaint submitted:', data);
        navigate('/product/checkout');
      } else {
        console.error('Error submitting complaint:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
  };

  const isSendComplaintDisabled = !selectedChef || complaintText.trim() === '';

  return (
    <div className="flex flex-col w-full justify-center items-center h-screen dark:bg-gray-900 space-y-5">
      <div className="flex space-x-3">
        <Dropdown
          items={chefs}
          isOpen={openDropdown}
          toggleDropdown={toggleDropdown}
          onItemClick={handleChefClick}
        />
      </div>
      {selectedChef && (
        <div className="text-lg text-gray-800 dark:text-gray-300">
          Selected Chef: {selectedChef.name}
        </div>
      )}
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

export default ComplainImporter;
