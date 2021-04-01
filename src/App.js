import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/api'
import AdminPage from './containers/AdminPage'
import LoginPage from './containers/Login';
import HomePage from './containers/HomePage/Loadable';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App(props) {
  const [isLogged, setIsLogged] = useState(localStorage.getItem('token')? true: false);
    
  function handleOnLogged() {
    setIsLogged(true);
  }

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" render={() => (<LoginPage onLogged={handleOnLogged}/>)} />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/admin" component={AdminPage} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
