import { INCREMENT_CART } from "./actionTypes";

export const incrementCart = (value: number) => ({
    type: INCREMENT_CART,
    payload: value,
})