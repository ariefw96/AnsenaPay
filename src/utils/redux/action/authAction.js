import * as actionTypes from '../actionTypes';

export const login = (id, email) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      id: id,
      email:email
    },
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
