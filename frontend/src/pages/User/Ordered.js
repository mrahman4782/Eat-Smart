import React from 'react';

const foodData = [
  {
    date: '2024-05-01',
    categories: [
      {
        type: 'Fruits',
        items: [
          { name: 'Apple', description: 'A sweet, crunchy fruit.' },
          { name: 'Banana', description: 'A soft, sweet fruit.' },
          { name: 'Orange', description: 'A juicy, tangy fruit.' }
        ]
      },
      {
        type: 'Vegetables',
        items: [
          { name: 'Carrot', description: 'A crunchy, sweet vegetable.' },
          { name: 'Broccoli', description: 'A nutritious, green vegetable.' },
          { name: 'Spinach', description: 'A leafy, green vegetable.' }
        ]
      }
    ]
  },
  {
    date: '2024-05-02',
    categories: [
      {
        type: 'Dairy',
        items: [
          { name: 'Milk', description: 'A dairy product, rich in calcium.' },
          { name: 'Cheese', description: 'A dairy product, made from milk.' },
          { name: 'Yogurt', description: 'A dairy product, fermented from milk.' }
        ]
      }
    ]
  }
];

const DropdownMenu = () => {
  return (
    <div className="p-4 max-w-lg mx-auto mt-24">
      {foodData.map((order, index) => (
        <details key={index} className="mb-2">
          <summary className="bg-gray-200 p-4 rounded-lg cursor-pointer shadow-md mb-4">
            <span className="font-semibold">Order Date: {order.date}</span>
          </summary>
          <ul className="ml-8 space-y-4">
            {order.categories.map((category, categoryIndex) => (
              <li key={categoryIndex}>
                <details className="mb-2">
                  <summary className="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                    <span className="font-semibold">{category.type}</span>
                  </summary>
                  <ul className="ml-8 space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <details className="mb-2">
                          <summary className="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                            <span className="font-semibold">{item.name}</span>
                          </summary>
                          <div className="bg-white p-4">
                            <p className="text-gray-800">{item.description}</p>
                          </div>
                        </details>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
};

export default DropdownMenu;
