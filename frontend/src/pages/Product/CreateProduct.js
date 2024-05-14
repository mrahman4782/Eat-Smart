import React, { useState } from 'react';
import axios from 'axios';
import createProduct from '../../functions/createProduct.js';


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
  <div className="dropdown inline-block relative mx-2" >
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
    chef: '',
    items: [],
    nutritionFacts: {
      servingSize: '',
      calories: '',
      totalFat: '',
      saturatedFat: '',
      transFat: '',
      cholesterol: '',
      sodium: '',
      totalCarbohydrates: '',
      dietaryFiber: '',
      sugars: '',
      protein: '',
      vitaminA: '',
      vitaminC: '',
      calcium: '',
      iron: '',
    }
  });
  const [name, setName] = useState('')
  const [tag, setTag] = useState('')
  const [price, setPrice] = useState('')
  const [calories, setCalories] = useState('')
  const [protein, setProtein] = useState('')
  const [carbs, setCarbs] = useState('')
  const [fat, setFat] = useState('')

  const [openDropdown, setOpenDropdown] = useState(null);
  const [nutritionDropdownOpen, setNutritionDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNutritionChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      nutritionFacts: {
        ...prevData.nutritionFacts,
        [name]: value,
      },
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
    <div className="flex items-center justify-center p-12 pt-72 mt-24 h-screen overflow-y-auto">
      <div className="mx-auto w-full max-w-[550px] bg-white mt-12 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-8 text-center">Create Special</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event)}
              placeholder="Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="description" className="mb-3 block text-base font-medium text-[#07074D]">
              Tags
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
              Choose Chef
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="chef"
                  value="Chef 1"
                  checked={productData.chef === 'Chef 1'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="text-[#6B7280]">Chef 1</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="chef"
                  value="Chef 2"
                  checked={productData.chef === 'Chef 2'}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="text-[#6B7280]">Chef 2</span>
              </label>
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
          <div className="mb-5">
            <button
              type="button"
              onClick={() => setNutritionDropdownOpen(!nutritionDropdownOpen)}
              className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
            >
              <span className="mr-1">Nutrition Facts (Optional)</span>
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            {nutritionDropdownOpen && (
              <div className="mt-4 max-h-96 overflow-y-auto">
                <div className="mb-3">
                  <label htmlFor="calories" className="block text-base font-medium text-[#07074D]">
                    Calories
                  </label>
                  <input
                    type="number"
                    name="calories"
                    id="calories"
                    value={productData.nutritionFacts.calories}
                    onChange={handleNutritionChange}
                    placeholder="Enter calories"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="totalFat" className="block text-base font-medium text-[#07074D]">
                    Fat
                  </label>
                  <input
                    type="text"
                    name="totalFat"
                    id="totalFat"
                    value={productData.nutritionFacts.totalFat}
                    onChange={handleNutritionChange}
                    placeholder="Enter total fat"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>

  
                <div className="mb-3">
                  <label htmlFor="protein" className="block text-base font-medium text-[#07074D]">
                    Protein
                  </label>
                  <input
                    type="text"
                    name="protein"
                    id="protein"
                    value={productData.nutritionFacts.protein}
                    onChange={handleNutritionChange}
                    placeholder="Enter protein"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="iron" className="block text-base font-medium text-[#07074D]">
                    Carbs
                  </label>
                  <input
                    type="text"
                    name="iron"
                    id="iron"
                    value={productData.nutritionFacts.iron}
                    onChange={handleNutritionChange}
                    placeholder="Enter iron"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            )}
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