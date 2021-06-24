import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import client from '../../utils/api';
import ME_QUERY from './queries';
import {APP_MANAGER, BET_MANAGER} from '../../utils/constants';
import { setUserInfo, delAuthToken, delUserInfo } from '../../utils/storage';
import Profile from '../Profile';

function renderProfile(data) {
  if (data.me) {
    return <Profile />
  } else {
    return (
      <div className="px-3 py-2 text-right text-sm">
        <Link to="/login" onClick={() => {
          delAuthToken();
          delUserInfo();
          client.resetStore();
        }} className="rounded-md py-2 px-4
          bg-cyan-800 hover:text-cyan-800 hover:bg-gray-200"
        >
          Ingresar
        </Link>
      </div>
    )
  }
}

function Header(props) {
  const { loading, error, data } = useQuery(ME_QUERY);

  if (loading) return <p>Cargando...</p>;
  if (error) {
    return <p>Error</p>;
    // return <Redirect to='/login'/>
  }
  if (data.me) {
    setUserInfo(data.me);
    for (const idx in data.me.groups.edges) {
      if ([BET_MANAGER, APP_MANAGER].includes(data.me.groups.edges[idx].node.name)){
        return <Redirect to='/admin'/>
      }
    }
  }

  return (
    <div className="flex flex-col sm:flex-row rounded-md items-center p-2
      justify-between text-center text-gray-200 bg-coolGray-900"
    >
      <div className="flex flex-col justify-between items-left px-3 py-2">
        <h1 className="text-5xl bg-cyan-800">
          J8Bet
        </h1>
        <p className="text-lg">
          Apuéstale al mundo 
        </p>
      </div>
      {renderProfile(data)}
    </div>
  )
};

export default Header;
