import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { delAuthToken, delUserInfo, getUserInfo } from '../../utils/storage';
import client from '../../utils/api';

function Profile(props) {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  if (redirectToReferrer === true) {
    return <Redirect to='/' />
  }

  return (
    <div className="text-center sm:text-right text-sm text-gray-200 px-3 py-2">
      <h3>Bienvenido, {getUserInfo().username}</h3>
      <p>Saldo: S/. 45.00</p>
      <button type="submit" className="
        w-full py-2 px-4 border
        border-transparent text-sm font-medium rounded-md text-white
        hover:text-cyan-800 bg-cyan-800 hover:border-cyan-800
        hover:border-8 hover:bg-gray-200 focus:outline-none focus:ring-2
        focus:ring-offset-2 focus:ring-indigo-500"
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
  )
};

export default Profile;
