const TOKEN_NAME = 'token';
const USER_INFO = 'userInfo';

export const setAuthToken = token => localStorage.setItem(TOKEN_NAME, token);
export const getAuthToken = () => localStorage.getItem(TOKEN_NAME);
export const delAuthToken = () => localStorage.removeItem(TOKEN_NAME);
export const setUserInfo = user => localStorage.setItem(USER_INFO, JSON.stringify(user));
export const getUserInfo = () => JSON.parse(localStorage.getItem(USER_INFO));
export const delUserInfo = () => localStorage.removeItem(USER_INFO);
