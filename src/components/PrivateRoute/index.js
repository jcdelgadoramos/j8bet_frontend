import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAuthToken } from '../../utils/storage';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        getAuthToken()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);

export default PrivateRoute;
