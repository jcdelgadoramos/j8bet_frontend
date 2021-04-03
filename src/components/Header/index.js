import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import client from '../../utils/api';
import ME_QUERY from '../../queries/Me'
import {APP_MANAGER, BET_MANAGER} from '../../utils/constants'
import { setUserInfo, delAuthToken, delUserInfo } from '../../utils/storage';
import Profile from '../Profile';

function Header(props) {
  const { loading, error, data } = useQuery(ME_QUERY);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;
  if (data.me) {
    setUserInfo(data.me);
    for (const idx in data.me.groups) {
      if ([BET_MANAGER, APP_MANAGER].includes(data.me.groups[idx].name)){
        return <Redirect to='/admin'/>
      }
    }
    return (
      <div className="flex items-center justify-between bg-coolGray-900 p-2 rounded-xl">
        <div className="flex flex-col justify-between items-left px-3 py-2">
          <h1 className="text-center text-5xl  text-gray-200 bg-cyan-800">
            J8Bet
          </h1>
          <p className="text-lg  text-gray-200">
            Apuéstale al mundo 
          </p>
        </div>
        <Profile />
      </div>
    )
  } else {
    delAuthToken();
    delUserInfo();
    client.resetStore();
  }

  return (
    <div className="flex items-center justify-between bg-coolGray-900 p-2">
      <div className="flex flex-col justify-between items-left px-3 py-2">
        <h1 className="text-center text-5xl  text-gray-200 bg-cyan-800">
          J8Bet
        </h1>
        <p className="text-lg  text-gray-200">
          Apuéstale al mundo 
        </p>
      </div>
      <div className="text-right text-sm text-gray-200 px-3 py-2">
        <Link to="/login/" onClick={() => {
          delAuthToken();
          delUserInfo();
          client.resetStore();
        }} className="
          group relative w-full flex justify-center py-2 px-4 border
          border-transparent text-sm font-medium rounded-md text-white
          hover:text-cyan-800 bg-cyan-800 duration-500 hover:border-cyan-800
          hover:border-8 hover:bg-gray-200 focus:outline-none focus:ring-2
          focus:ring-offset-2 focus:ring-indigo-500"
        >
          Ingresar
        </Link>
      </div>
    </div>
  )
};

export default Header;
