import React from 'react';

const foodData = [
  {
    date: '2024-05-01',
    orders: [
      {
        orderNumber: 'Order 1',
        items: [
          { name: 'Apple', description: 'A sweet, crunchy fruit.' },
          { name: 'Banana', description: 'A soft, sweet fruit.' }
        ]
      },
      {
        orderNumber: 'Order 2',
        items: [
          { name: 'Banana', description: 'A soft, sweet fruit.' },
          { name: 'Spinach', description: 'A leafy, green vegetable.' }
        ]
      }
    ]
  },
  {
    date: '2024-05-02',
    orders: [
      {
        orderNumber: 'Order 3',
        items: [
          { name: 'Milk', description: 'A dairy product, rich in calcium.' },
          { name: 'Cheese', description: 'A dairy product, made from milk.' }
        ]
      }
    ]
  }
];

const handleReorder = (orderNumber) => {
  alert(`Reordered: ${orderNumber}`);
};

const DropdownMenu = () => {
  return (
    <div className="p-4 max-w-lg mx-auto mt-24">
      {foodData.map((orderDate, index) => (
        <details key={index} className="mb-2">
          <summary className="bg-gray-200 p-4 rounded-lg cursor-pointer shadow-md mb-4">
            <span className="font-semibold">{orderDate.date}</span>
          </summary>
          <ul className="ml-8 space-y-4">
            {orderDate.orders.map((order, orderIndex) => (
              <li key={orderIndex}>
                <details className="mb-2">
                  <summary className="bg-gray-100 p-3 rounded-lg cursor-pointer shadow flex justify-between items-center">
                    <span className="font-semibold">{order.orderNumber}</span>
                    <button
                      onClick={() => handleReorder(order.orderNumber)}
                      className="ml-4 bg-blue-500 text-white px-3 py-1 rounded-lg shadow"
                    >
                      Reorder
                    </button>
                  </summary>
                  <ul className="ml-8 space-y-4">
                    {order.items.map((item, itemIndex) => (
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
