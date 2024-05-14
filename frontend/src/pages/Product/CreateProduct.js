import React, { useState } from 'react';
import axios from 'axios';

const itemData = [
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
      className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
      onClick={toggleDropdown}
    >
      <span className="mr-1">{type}</span>
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </button>
    {isOpen && (
      <ul className="dropdown-menu absolute text-gray-700 pt-1">
        {items.map((item, index) => (
          <li key={index}>
            <a
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
              onClick={() => onItemClick(item)}
            >
              {item.name} - ${item.price}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    brand: '',
    discountedPrice: '',
    items: []
  });

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const handleItemClick = (item) => {
    const existingItem = productData.items.find(i => i.name === item.name);
    if (existingItem) {
      setProductData(prevData => ({
        ...prevData,
        items: prevData.items.map(i =>
          i.name === item.name ? { ...i, count: i.count + 1 } : i
        )
      }));
    } else {
      setProductData(prevData => ({
        ...prevData,
        items: [...prevData.items, { ...item, count: 1 }]
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/createproducts', productData);
      alert(response.data);
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product');
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={productData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="description" className="mb-3 block text-base font-medium text-[#07074D]">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              value={productData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="price" className="mb-3 block text-base font-medium text-[#07074D]">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={productData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="image" className="mb-3 block text-base font-medium text-[#07074D]">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={productData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="brand" className="mb-3 block text-base font-medium text-[#07074D]">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              value={productData.brand}
              onChange={handleChange}
              placeholder="Enter brand"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="discountedPrice" className="mb-3 block text-base font-medium text-[#07074D]">
              Discounted Price
            </label>
            <input
              type="number"
              name="discountedPrice"
              id="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              placeholder="Enter discounted price"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Items
            </label>
            <div className="flex space-x-3">
              {itemData.map((category, index) => (
                <Dropdown
                  key={index}
                  type={category.type}
                  items={category.items}
                  isOpen={openDropdown === category.type}
                  toggleDropdown={() => toggleDropdown(category.type)}
                  onItemClick={handleItemClick}
                />
              ))}
            </div>
          </div>
          <div className="mb-5">
            <h3 className="mb-3 text-lg font-medium text-[#07074D]">Selected Items:</h3>
            <ul>
              {productData.items.map((item, index) => (
                <li key={index} className="text-base text-[#6B7280]">
                  {item.count} x {item.name} (${item.price})
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
