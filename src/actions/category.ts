import { CHANGE_CATEGORY } from "./actionTypes";

export const changeCategory = (category: string) => ({
    type: CHANGE_CATEGORY,
    payload: category
})