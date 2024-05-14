import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Profile from './Profile';
import Ordered from './Ordered';

const billingData = [
  {
    date: '2024-05-01',
    transactions: [
      {
        transactionNumber: 'Transaction 1',
        details: [
          { name: 'Monthly Subscription', amount: '$10.00', description: 'Monthly subscription fee.' },
          { name: 'Additional Storage', amount: '$5.00', description: 'Charge for additional storage.' }
        ]
      },
      {
        transactionNumber: 'Transaction 2',
        details: [
          { name: 'One-time Setup Fee', amount: '$25.00', description: 'Initial setup fee.' }
        ]
      }
    ]
  },
  {
    date: '2024-05-02',
    transactions: [
      {
        transactionNumber: 'Transaction 3',
        details: [
          { name: 'Monthly Subscription', amount: '$10.00', description: 'Monthly subscription fee.' }
        ]
      }
    ]
  }
];

const handleInvoice = (transactionNumber) => {
  alert(`Invoice generated for: ${transactionNumber}`);
};

const Billing = () => {
  const location = useLocation();

  return (
    <Layout>
      <aside className="py-6 lg:col-span-3">
        <nav className="space-y-1">
          <Link to="/user/profile" className={`group border-l-4 px-3 py-2 flex items-center text-xl font-medium ${location.pathname === '/user/profile' ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700' : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900'}`}>
            <svg className={`text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-8 w-8 ${location.pathname === '/user/profile' ? 'text-teal-500 group-hover:text-teal-500' : 'text-gray-400 group-hover:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">Profile</span>
          </Link>
          <Link to="/user/billing" className={`group border-l-4 px-3 py-2 flex items-center text-xl font-medium ${location.pathname === '/user/billing' ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700' : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900'}`}>
            <svg className={`text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-8 w-8 ${location.pathname === '/user/billing' ? 'text-teal-500 group-hover:text-teal-500' : 'text-gray-400 group-hover:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
            <span className="truncate">Billing</span>
          </Link>
          <Link to="/user/ordered" className={`group border-l-4 px-3 py-2 flex items-center text-xl font-medium ${location.pathname === '/user/ordered' ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700' : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900'}`}>
            <svg className={`text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-8 w-8 ${location.pathname === '/user/ordered' ? 'text-teal-500 group-hover:text-teal-500' : 'text-gray-400 group-hover:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.093 12.093 0 0012 4.25v9.75z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v9.75A12.093 12.093 0 005.84 10.578L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 9.75a9 9 0 109 9.751 9 9 0 00-9-9.751z" />
            </svg>
            <span className="truncate">Ordered</span>
          </Link>
        </nav>
      </aside>
      <div className="lg:col-span-9 p-6">
        {billingData.map((billingDate, index) => (
          <details key={index} className="mb-2">
            <summary className="bg-gray-200 p-4 rounded-lg cursor-pointer shadow-md mb-4">
              <span className="font-semibold text-2xl">{billingDate.date}</span>
            </summary>
            <ul className="ml-8 space-y-4">
              {billingDate.transactions.map((transaction, transactionIndex) => (
                <li key={transactionIndex}>
                  <details className="mb-2">
                    <summary className="bg-gray-100 p-3 rounded-lg cursor-pointer shadow flex justify-between items-center">
                      <span className="font-semibold text-xl">{transaction.transactionNumber}</span>
                      <button
                        onClick={() => handleInvoice(transaction.transactionNumber)}
                        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
                      >
                        Generate Invoice
                      </button>
                    </summary>
                    <ul className="ml-8 space-y-4">
                      {transaction.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>
                          <details className="mb-2">
                            <summary className="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                              <span className="font-semibold text-lg">{detail.name} - {detail.amount}</span>
                            </summary>
                            <div className="bg-white p-4">
                              <p className="text-gray-800 text-lg">{detail.description}</p>
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
    </Layout>
  );
};

export default Billing;
