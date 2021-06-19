import React from 'react';
import Header from '../../components/Header';
import Dashboard from '../../components/Dashboard';

function HomePage (props) {

  return (
    <div className="min-h-screen  bg-pink-600 p-3 sm:px-3 lg:px-3">
      <Header />
      <div className="flex w-full py-2 gap-2">
        <Dashboard />
      </div>
    </div>
  );
}

export default HomePage;
