import {combineReducers, createStore} from "redux";
import {characterReducer} from "./characterReducer";

const rootReducer = combineReducers({
    character: characterReducer
});

export const store = createStore(rootReducer)