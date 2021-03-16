import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { setUserInfo, delAuthToken, delUserInfo, getUserInfo } from '../../utils/storage';
import ME_QUERY from '../../queries/Me'
import client from '../../utils/api';

function HomePage (props) {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { loading, error, data } = useQuery(ME_QUERY);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;
  if (data.me) {
    setUserInfo(data.me);
  } else {
    delAuthToken();
    delUserInfo();
    client.resetStore();
    return <Redirect to='/' />;
  }

  if (redirectToReferrer === true) {
    return <Redirect to='/' />
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Bienvenido a J8Bet, {getUserInfo().username}
        </h2>
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

export default HomePage;
