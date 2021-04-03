import React from 'react';
import { Redirect } from 'react-router-dom';
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
      <div className="flex items-center justify-between bg-coolGray-900 p-2">
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
    return <Redirect to='/' />;
  }
};

export default Header;
