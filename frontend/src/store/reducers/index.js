import { combineReducers } from 'redux';
import LogInReducer from './LogInReducer';
import RestaurantReducer from './RestaurantReducer';

const rootReducer = combineReducers({
LogInReducer,
RestaurantReducer,
});


const initialState = {
  token: null,
  // signUpErr: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    // case signup: {
    //   return {
    //     ...state,
    //
    //   }
    // }

    default: {
      return state;
    }
  }
};

export default rootReducer;

