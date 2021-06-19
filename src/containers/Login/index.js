import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client'
import LOGIN_MUTATION from './mutations';
import { setAuthToken, getAuthToken } from '../../utils/storage';

function Login (props) {
  const [redirectToReferrer, setRedirectToReferrer] = useState(
      getAuthToken() ? true : false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [login, { data }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      if (data.tokenAuth.errors) {
        setError(true);
      } else {
        setAuthToken(data.tokenAuth.token);
        setError(false);
        props.onLogged();
        setRedirectToReferrer(true);
      }
    },
    onError: (error) => {
      console.log(error);
      setError(true);
    },
  });
  
  if (redirectToReferrer === true) {
    return <Redirect to='/' />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-600
      py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-coolGray-900 px-8 py-8
        rounded-2xl">
        <div>
          <img className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold
            text-gray-200">
           Ingresa a J8Bet
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={ event => {
          event.preventDefault();
          login({variables: {
            username: username,
            password: password,
          }})
        }}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Nombre de usuario
              </label>
              <input id="email-address" name="email" type="username" required
                className="appearance-none rounded-none relative block w-full
                px-3 py-2 border border-gray-300 placeholder-gray-500
                text-gray-900 rounded-t-md focus:outline-none
                focus:ring-cyan-800 focus:border-cyan-800 focus:z-10
                sm:text-sm" placeholder="Nombre de usuario" value={username}
                onChange={event => setUsername(event.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input id="password" name="password" type="password"
                autoComplete="current-password" required
                className="appearance-none rounded-none relative block w-full
                px-3 py-2 border border-gray-300 placeholder-gray-500
                text-gray-900 rounded-b-md focus:outline-none
                focus:ring-cyan-800 focus:border-cyan-800 focus:z-10
                sm:text-sm" placeholder="Contraseña" value={password}
                onChange={event => setPassword(event.target.value)} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox"
               className="h-4 w-4 text-cyan-800 focus:ring-cyan-800
                border-gray-200 rounded" />
              <label htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-200">
                Recuérdame
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-cyan-800
                hover:text-gray-200">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <p hidden={!error} className="text-center text-pink-600 text-sm">
            El usuario y/o contraseña son incorrectos.
          </p>

          <div>
            <button type="submit" className="group relative w-full flex
              justify-center py-2 px-4 border border-transparent text-sm
              font-medium rounded-md text-white bg-cyan-800
              hover:text-cyan-800 hover:border-cyan-800 hover:border-8
              hover:bg-gray-200 focus:outline-none focus:ring-2
              focus:ring-offset-2 focus:ring-cyan-800" >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-200
                  group-hover:text-cyan-800" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              Ingresa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
