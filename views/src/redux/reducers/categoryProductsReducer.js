import {
    FETCH_CATEGORY_PRODUCTS_STARTED,
    FETCH_CATEGORY_PRODUCTS_FAILURE,
    FETCH_CATEGORY_PRODUCTS_SUCCESS
} from '../actions/types';

const initialState = {
    categoryName: '',
    categoryProducts: [],
    loading: false,
    error: null
}

const categoryProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_PRODUCTS_STARTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_CATEGORY_PRODUCTS_SUCCESS:
            return {
                ...state,
                categoryName: action.payload.products.category.name,
                categoryProducts: action.payload.products.product,
                loading: false,
                error: null
            }
        case FETCH_CATEGORY_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.err
            }

        default:
            return state;
    }
}

export default categoryProductsReducer;