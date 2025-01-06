import { CHANGE_CATEGORY } from "../actions/actionTypes";

const initialCartState = "Dessert";

export const categoryReducer = (state = initialCartState, action: any): string => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}