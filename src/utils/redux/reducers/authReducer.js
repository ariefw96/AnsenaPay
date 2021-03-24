import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  isLogin: false,
  id: null,
  email:null,
  name:null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLogin: true,
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLogin: false,
        id: null,
        email:null,
        name:null
      };

    default:
      return state;
  }
};

export default authReducer;
