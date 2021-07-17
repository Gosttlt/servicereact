import { combineReducers, createStore, applyMiddleware } from 'redux';
import authReducer from 'store/authReducer/authReducer';
import productPeducer from "store/productReducer/productReducer";
import thunkMiddleware from 'redux-thunk';
import accountReducer from './accountReducer/reducer';


let reducers = combineReducers({ productPeducer, authReducer, accountReducer })
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store


export default store