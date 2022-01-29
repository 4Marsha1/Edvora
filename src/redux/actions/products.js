import axios from "axios";
import { FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_INITIATED, FETCH_PRODUCTS_SUCCESS } from "./types"

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_PRODUCTS_INITIATED
        });
        const res = await axios.get('https://assessment-edvora.herokuapp.com/')
        if (res.status === 200) {
            const data = await res.data;
            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: data
            })
        }
        else {
            dispatch({
                type: FETCH_PRODUCTS_FAILED,
                payload: "error"
            })
        }
    }
}