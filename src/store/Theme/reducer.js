import * as actionTypes from './actionTypes';

const lightTheme = {
  BACKGROUND_COLOR: '#fff',
  SURFACE_COLOR: '#fff',
  PRIMARY_COLOR: '#4283hf',
  SECONDARY_COLOR: '#ff5917',
  ERROR_COLOR: '#d32f2f',
  ON_BACKGROUND_COLOR: '#000',
  ON_SURFACE_COLOR: '#000',
  ON_PRIMARY_COLOR: '#fff',
  ON_SECONDARY_COLOR: '#fff',
  ON_ERROR_COLOR: '#fff',
};

export const darkTheme = {
  BACKGROUND_COLOR: '#121212',
  SURFACE_COLOR: '#1e1e1e',
  PRIMARY_COLOR: '#328efe',
  SECONDARY_COLOR: '#ff5917',
  ERROR_COLOR: '#d32f2f',
  ON_BACKGROUND_COLOR: '#fff',
  ON_SURFACE_COLOR: '#fff',
  ON_PRIMARY_COLOR: '#000',
  ON_SECONDARY_COLOR: '#000',
  ON_ERROR_COLOR: '#000',
};

const initialState = { theme: darkTheme };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME:
      return {
        ...state,
        theme: state.theme === darkTheme ? lightTheme : darkTheme,
      };
    default:
      return state;
  }
};

export default reducer;
