import * as types from '../constants/actionTypes';

export function changeName(name) {
  return function (dispatch) {
    return dispatch({
      type: types.CHANGE_NAME,
      value: name
    });
  };
}

export function changeMobile(mobile) {
  return function (dispatch) {
    return dispatch({
      type: types.CHANGE_MOBILE,
      value: mobile
    });
  };
}



