import axios from 'axios';
import actionTypes from '../../enums/actionTypes';

export const getProducts = (products = []) => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        payload: products
    }
}

export const fetchProducts = (pageNumber) => async dispatch => {
    const res = await axios.get(`https://node-sample-api.herokuapp.com/api/products?page=${pageNumber}`);
    dispatch(getProducts(res.data.data));
}


