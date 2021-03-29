import axios from 'axios';
import * as actionTypes from './actionTypes';

const TIMEOUT_TIME_IN_MS = 86_300_000;

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

export const authSuccess = (token, accountkey, profile) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    accountkey: accountkey,
    profile: profile,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authCheckState());
    }, expirationTime);
  };
};

// axios
// .get(`/api/auth/login`, {
//   params: {
//     connectData: connectData,
//   },
// })
// .then(

export const authenticate = (connectData) => {
  return (dispatch) => {
    dispatch(authStart());
    axios.post(`/api/auth/login`, { connectData: connectData }).then(
      (resp) => {
        const expirationDate = new Date(
          new Date().getTime() + TIMEOUT_TIME_IN_MS
        );
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('accountkey', resp.data.accountkey);
        localStorage.setItem('profile', JSON.stringify(resp.data.profile));
        dispatch(
          authSuccess(resp.data.token, resp.data.accountkey, resp.data.profile)
        );
        dispatch(checkAuthTimeout(connectData));
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
  localStorage.removeItem('profile');
  localStorage.removeItem('accountkey');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const accountkey = localStorage.getItem('accountkey');
    const profile = JSON.parse(localStorage.getItem('profile'));
    if (!accountkey || !profile) {
      dispatch(logOut());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        axios
          .post(`/api/auth/token`, {
              login: profile.login,
              accountkey: accountkey,
          })
          .then(
            (resp) => {
              const expirationDate = new Date(
                new Date().getTime() + TIMEOUT_TIME_IN_MS
              );
              localStorage.setItem('expirationDate', expirationDate);
              localStorage.setItem('token', resp.data.token);
              localStorage.setItem(
                'profile',
                JSON.stringify(resp.data.profile)
              );
              dispatch(
                authSuccess(
                  resp.data.token,
                  resp.data.accountkey,
                  resp.data.profile
                )
              );
              dispatch(
                checkAuthTimeout(
                  expirationDate.getTime() - new Date().getTime()
                )
              );
            },
            (err) => {
              console.log(err);
              dispatch(authFail(err));
            }
          );
      } else {
        if (!token) {
          dispatch(logOut());
        } else {
          dispatch(authSuccess(token, accountkey, profile));
          dispatch(
            checkAuthTimeout(expirationDate.getTime() - new Date().getTime())
          );
        }
      }
    }
  };
};
