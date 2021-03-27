import * as actionTypes from './actionTypes';

const initialState = {
  token: null,
  profile: null,
  loading: false,
  error: null,
  wykopConnectUrl: null,
  accountKey: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
    case actionTypes.CONNECT_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.CONNECT_SUCCESS:
      return {
        ...state,
        wykopConnectUrl: action.wykopConnectUrl,
        error: null,
        loading: false,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        accountKey: action.accountKey,
        profile: action.profile,
        error: null,
        loading: false,
      };
    case actionTypes.AUTH_FAIL:
    case actionTypes.CONNECT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        wykopConnectUrl: null,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        profile: null,
        accountKey: null,
      };
    default:
      return state;
  }
};

export default reducer;
