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
        <div>
          <h2>Bienvenido a J8Bet</h2>
          <button onClick={event => {
            delAuthToken();
            delUserInfo();
            window.location = '/login';
          }}>Salir</button>
        </div>
    );
  }
}

export default HomePage;
