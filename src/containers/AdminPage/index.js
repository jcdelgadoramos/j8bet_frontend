import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { delAuthToken, delUserInfo, getUserInfo } from '../../utils/storage';
import client from '../../utils/api';

function AdminPage (props) {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  if (redirectToReferrer === true) {
    return <Redirect to='/' />
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Bienvenido a J8Bet, {getUserInfo().username}
        </h2>
        <p className="text-center">
          La página de administración no está habilitada aún.
        </p>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={event => {
          delAuthToken();
          delUserInfo();
          client.resetStore();
          setRedirectToReferrer(true);
        }}>
          Salir
        </button>
      </div>
    </div>
  );
}

export default AdminPage;