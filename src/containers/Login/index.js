import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client'
import LOGIN_MUTATION from '../../mutations/Login'
import { setAuthToken, getAuthToken } from '../../utils/storage';

function Login (props) {
  const [redirectToReferrer, setRedirectToReferrer] = useState(
      getAuthToken() ? true : false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [login, { data }] = useMutation(LOGIN_MUTATION);
  
  if (redirectToReferrer === true) {
    return <Redirect to='/' />
  }

  return (
    <div>
        <form onSubmit={ e => {
          e.preventDefault();
            login({variables: {
              username: username,
              password: password
            }})
            .then(res => {
              setAuthToken(data.tokenAuth.token);
              setError(false);
              props.onLogged();
              setRedirectToReferrer(true);
            })
            .catch(err => {
              setError(true);
            })
        }}>
          <input
            id="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
            placeholder="Usuario" />
          <input
            id="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="Contraseña" />
          <input type="submit" />
        </form>
    </div>
  );
}

export default Login;
