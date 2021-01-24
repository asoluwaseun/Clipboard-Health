import { useReducer } from "react";
import axios from "axios";
import constant from "../constants";

const filtersAction = (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getFilters = async () => {
        try {
            const filters = await axios.get('/api/filters');
            dispatch({
                type: constant.filters.GET_FILTERS,
                payload: filters.data
            });
        } catch (e) {
            throw e;
        }
    };
    return { state, getFilters };
};

export default filtersAction;