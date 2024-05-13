import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = () => {
  const [dishData, setDishData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    brand: '',
    discountedPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDishData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/createproducts', dishData);
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
              value={dishData.name}
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
              value={dishData.description}
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
              value={dishData.price}
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
              value={dishData.image}
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
              value={dishData.brand}
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
              value={dishData.discountedPrice}
              onChange={handleChange}
              placeholder="Enter discounted price"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
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
