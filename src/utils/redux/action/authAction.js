import * as actionTypes from '../actionTypes';

export const login = (id, email, name) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      id: id,
      email:email,
      name:name
    },
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
