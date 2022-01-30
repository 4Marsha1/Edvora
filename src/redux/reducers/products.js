import { FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_INITIATED, FETCH_PRODUCTS_SUCCESS } from "../actions/types"

// state of the products 
const initialState = {
    loading: false,
    products: [],
    error: ''
}

// reducer for the products 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_INITIATED:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }
        case FETCH_PRODUCTS_FAILED:
            return {
                loading: false,
                products: [],
                error: action.payload
            }
        default: return state;
    }
}

export default reducer;