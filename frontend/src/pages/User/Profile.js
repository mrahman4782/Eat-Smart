import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Billing from './Billing';
import Ordered from './Ordered';

const profileData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 234 567 890',
  address: '123 Main St, Springfield, IL',
  preferences: {
    newsletter: true,
    notifications: false,
    darkMode: true
  }
};

const handleUpdate = (field) => {
  alert(`Update ${field}`);
};

const Profile = () => {
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
        <div className="mb-4">
          <h2 className="text-3xl font-semibold text-gray-900">Profile Information</h2>
          <div className="mt-4">
            <p className="text-2xl font-medium">Name: {profileData.name}</p>
            <button
              onClick={() => handleUpdate('Name')}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
            >
              Update Name
            </button>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-medium">Email: {profileData.email}</p>
            <button
              onClick={() => handleUpdate('Email')}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
            >
              Update Email
            </button>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-medium">Phone: {profileData.phone}</p>
            <button
              onClick={() => handleUpdate('Phone')}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
            >
              Update Phone
            </button>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-medium">Address: {profileData.address}</p>
            <button
              onClick={() => handleUpdate('Address')}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
            >
              Update Address
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">Preferences</h2>
          <div className="mt-4">
            <p className="text-2xl font-medium">Newsletter: {profileData.preferences.newsletter ? 'Subscribed' : 'Not Subscribed'}</p>
            <button
              onClick={() => handleUpdate('Newsletter')}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
            >
              Update Newsletter Subscription
            </button>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-medium">Notifications: {profileData.preferences.notifications ? 'Enabled' : 'Disabled'}</p>
            <button
              onClick={() => handleUpdate('Notifications')}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
            >
              Update Notifications
            </button>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-medium">Dark Mode: {profileData.preferences.darkMode ? 'Enabled' : 'Disabled'}</p>
            <button
              onClick={() => handleUpdate('Dark Mode')}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
            >
              Update Dark Mode
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
