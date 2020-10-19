import { combineReducers } from 'redux';
import productsReducer from './products/productsReducers'; 
import appReducer from './app/appReducers';
import productReducer from './products/productReducers';

export default combineReducers({
    products: productsReducer,
    initialAppData: appReducer,
    product: productReducer
});