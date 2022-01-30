import axios from "axios";
import { FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_INITIATED, FETCH_PRODUCTS_SUCCESS } from "./types"

// fetch product action creator
export const fetchProducts = () => {
    return async (dispatch) => {
        // fetch product initiated action
        dispatch({
            type: FETCH_PRODUCTS_INITIATED
        });
        const res = await axios.get('https://assessment-edvora.herokuapp.com/')
        // if products are successfully fetched
        if (res.status === 200) {
            const data = await res.data;
            // fetch product success action
            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: data
            })
        }
        // if products could not be fetched
        else {
            // fetch product failed action
            dispatch({
                type: FETCH_PRODUCTS_FAILED,
                payload: "error"
            })
        }
    }
}