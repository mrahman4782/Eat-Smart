import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="relative bg-sky-700" style={{ height: '200px' }}>
        <header className="absolute bottom-0 w-full py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold tracking-tight text-white">Settings</h1>
          </div>
        </header>
      </div>
      <main className="flex-grow mt-32">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
