import React, { Component, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getAuthToken, delAuthToken, delUserInfo } from '../../utils/storage';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirectToReferrer: getAuthToken() ? true : false,
    };
  }

  render() {
    const { redirectToReferrer } = this.state.redirectToReferrer;
    if (redirectToReferrer === true) {
      return <Redirect to='/' />
    }
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Bienvenido a J8Bet
          </h2>
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={event => {
            delAuthToken();
            delUserInfo();
            window.location = '/login';
          }}>Salir</button>
        </div>
      </div>
    );
  }
}

export default HomePage;
