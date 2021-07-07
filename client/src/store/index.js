import { combineReducers, createStore, applyMiddleware } from 'redux';
import authReducer from 'store/authReducer/authReducer';
import productPeducer from "store/productReducer/productReducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({ productPeducer, authReducer })
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store


export default store