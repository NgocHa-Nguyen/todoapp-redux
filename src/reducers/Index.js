import items from "./TodoReducer";
import { combineReducers } from "redux";

const myReducer =  combineReducers({
    items
});
export default myReducer;
