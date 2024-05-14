import React from 'react';
import { useLocation } from 'react-router-dom';

const NutritionFacts = () => {
  const location = useLocation();
  const { nutritionFacts } = location.state || {};

  return (
    <div className="bg-white rounded shadow-md max-w-xl mx-auto mt-20 p-4 ">
      <div className="text-2xl font-bold mb-4">Nutrition Facts</div>
      <table className="table w-full border border-black border-collapse">
        <tbody>
          <tr className="border-b border-black">
            <td className="py-2 font-medium border-r border-black">Serving Size</td>
            <td className="py-2 border-l border-black">{nutritionFacts.servingSize}</td>
          </tr>
          <tr>
            <td className="py-2 font-medium">Amount Per Serving</td>
            <td className="py-2"></td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Calories</td>
            <td className="py-2">{nutritionFacts.calories}</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Total Fat</td>
            <td className="py-2">{nutritionFacts.totalFat}</td>
          </tr>
          <tr>
            <td className="py-2 pl-10">Saturated Fat</td>
            <td className="py-2">{nutritionFacts.saturatedFat}</td>
          </tr>
          <tr>
            <td className="py-2 pl-10">Trans Fat</td>
            <td className="py-2">{nutritionFacts.transFat}</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Cholesterol</td>
            <td className="py-2">{nutritionFacts.cholesterol}</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Sodium</td>
            <td className="py-2">{nutritionFacts.sodium}</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Total Carbohydrates</td>
            <td className="py-2">{nutritionFacts.totalCarbohydrates}</td>
          </tr>
          <tr>
            <td className="py-2 pl-10">Dietary Fiber</td>
            <td className="py-2">{nutritionFacts.dietaryFiber}</td>
          </tr>
          <tr>
            <td className="py-2 pl-10">Sugars</td>
            <td className="py-2">{nutritionFacts.sugars}</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Protein</td>
            <td className="py-2">{nutritionFacts.protein}</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Vitamin A</td>
            <td className="py-2">{nutritionFacts.vitaminA}</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Vitamin C</td>
            <td className="py-2">{nutritionFacts.vitaminC}</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Calcium</td>
            <td className="py-2">{nutritionFacts.calcium}</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Iron</td>
            <td className="py-2">{nutritionFacts.iron}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NutritionFacts;
