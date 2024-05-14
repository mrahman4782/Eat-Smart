import React from 'react';

const NutritionFacts = () => {
  return (
    <div className="bg-white rounded shadow-md max-w-xl mx-auto mt-8 p-4">
      <div className="text-2xl font-bold mb-4">Nutrition Facts</div>
      <table className="table w-full border border-black border-collapse">
        <tbody>
          <tr className="border-b border-black">
            <td className="py-2 font-medium border-r border-black">Serving Size</td>
            <td className="py-2 border-l border-black">1 cup (240g)</td>
          </tr>
          <tr>
            <td className="py-2 font-medium">Amount Per Serving</td>
            <td className="py-2"></td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Calories</td>
            <td className="py-2">200</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Total Fat</td>
            <td className="py-2">10g</td>
          </tr>
          <tr>
            <td className="py-2 pl-10">Saturated Fat</td>
            <td className="py-2">2g</td>
          </tr>
          <tr>
            <td className="py-2 pl-10">Trans Fat</td>
            <td className="py-2">0g</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Cholesterol</td>
            <td className="py-2">20mg</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Sodium</td>
            <td className="py-2">300mg</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Total Carbohydrates</td>
            <td className="py-2">20g</td>
          </tr>
          <tr>
            <td className="py-2 pl-10">Dietary Fiber</td>
            <td className="py-2">2g</td>
          </tr>
          <tr>
            <td className="py-2 pl-10">Sugars</td>
            <td className="py-2">4g</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Protein</td>
            <td className="py-2">10g</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Vitamin A</td>
            <td className="py-2">8%</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Vitamin C</td>
            <td className="py-2">2%</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Calcium</td>
            <td className="py-2">6%</td>
          </tr>
          <tr>
            <td className="py-2 pl-6 font-medium">Iron</td>
            <td className="py-2">4%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NutritionFacts;
