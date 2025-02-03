import { INCREMENT_CART } from "../actions/actionTypes";

const initialCartState = 0;

export const cartReducer = (state = initialCartState, action: any): number => {
  switch (action.type) {
    case INCREMENT_CART:
      return state + action.payload;
    default:
      return state;
  }
};