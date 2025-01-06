import { combineReducers } from "redux";
import { categoryReducer } from "./reducers/category";
import { cartReducer } from "./reducers/cart";


const rootReducer = combineReducers({
    cartCounter: cartReducer,
    category: categoryReducer
});

export default rootReducer;