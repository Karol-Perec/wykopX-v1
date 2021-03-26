import axios from 'axios';
import * as actionTypes from './actionTypes';

export const connectStart = () => {
  return {
    type: actionTypes.CONNECT_START,
  };
};

export const connectSuccess = (wykopConnectUrl) => {
  return {
    type: actionTypes.CONNECT_SUCCESS,
    wykopConnectUrl: wykopConnectUrl,
  };
};

export const connectFail = (error) => {
  return {
    type: actionTypes.CONNECT_FAIL,
    error: error,
  };
};

export const connect = () => {
  return (dispatch) => {
    dispatch(connectStart());
    axios
      .get(`/api/auth/getUrl`, {
        params: {
          redirectUrl: window.location.href,
        },
      })
      .then(
        (resp) => {
          dispatch(connectSuccess(resp.data));
        },
        (err) => {
          console.log(err);
          dispatch(connectFail(err));
        }
      );
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, login) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    login: login,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const authenticate = (connectData) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .get(`/api/auth/login`, {
        params: {
          connectData: connectData,
        },
      })
      .then(
        (resp) => {
          localStorage.setItem('token', resp.data.token);
          localStorage.setItem('login', resp.data.login);
          dispatch(authSuccess(resp.data.token, resp.data.login));
        },
        (err) => {
          console.log(err);
          dispatch(authFail(err));
        }
      );
  };
};

export const logOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('login');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logOut());
    } else {
      const login = localStorage.getItem('login');
      dispatch(authSuccess(token, login));
    }
  };
};
