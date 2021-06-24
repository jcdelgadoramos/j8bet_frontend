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
    <div className="min-h-screen flex items-center justify-center py-12 px-4
      bg-pink-600">
      <div className="max-w-md w-full space-y-8 px-8 py-8 rounded-2xl
        text-center text-gray-200 bg-coolGray-900
        ">
        <h2 className="mt-6 text-3xl font-extrabold">
          Bienvenido a J8Bet, {getUserInfo().username}
        </h2>
        <p>
          La página de administración no está habilitada aún.
        </p>
        <button type="submit" className="group relative w-full flex
          justify-center py-2 px-4 border border-transparent text-sm font-medium
          rounded-md text-gray-200 bg-cyan-800 hover:bg-gray-200
          hover:text-cyan-800 hover:border-8 hover:border-cyan-800
          focus:ring-cyan-800 focus:border-cyan-800 focus:z-10"
          onClick={event => {
            delAuthToken();
            delUserInfo();
            client.resetStore();
            setRedirectToReferrer(true);
          }}
        >
          Salir
        </button>
      </div>
    </div>
  );
}

export default AdminPage;