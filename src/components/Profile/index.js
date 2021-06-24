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
    <div className="px-3 py-2 text-center sm:text-right text-sm">
      <h3>Bienvenido, {getUserInfo().username}</h3>
      <p>Saldo: S/. 45.00</p>
      <button type="submit" className="w-full rounded-md py-2 px-4 font-medium
        bg-cyan-800 hover:text-cyan-800 hover:bg-gray-200"
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
