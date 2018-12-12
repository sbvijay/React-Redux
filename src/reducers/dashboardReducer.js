import { CHANGE_NAME, CHANGE_MOBILE } from '../constants/actionTypes';
import initialState from './initialState';

export default function dashboardReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case CHANGE_NAME:
      newState = {
        ...state,
        userDetails:{
          ...state.userDetails,
          name:action.value
        }
      }
      return newState;
    case CHANGE_MOBILE:
      newState = {
        ...state,
        userDetails:{
          ...state.userDetails,
          mobileNumber:action.value
        }
      }
      return newState;
    default:
      return state;
  }
}
