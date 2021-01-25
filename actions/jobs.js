import { useReducer } from "react";
import axios from "axios";
import constant from "../constants";

const jobsAction = (reducer, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const getJobs = async () => {
        try {
            const jobs = await axios('/api/jobs');
            dispatch({
                params: {},
                type: constant.jobs.GET_JOBS,
                payload: jobs.data
            });
        } catch (e) {
            throw e;
        }
    };

    const clearSearch = ()=>{
        dispatch({
            type: constant.jobs.CLEAR_SEARCH
        })
    }

    const searchJobs = async (params) => {
        try {
            const jobs = await axios.get("/api/jobs", { params });
            dispatch({
                params,
                type: constant.jobs.SEARCH_JOBS,
                payload: jobs.data
            });
        } catch (e) {
            throw e;
        }
    };

    const sortJobs = async (params) => {
        try {
            dispatch({
                type: constant.jobs.SET_SORTER,
                payload: {
                    sorter: params.sorter,
                    order: params.order
                }
            });
            delete params.sorter;
            const jobs = await axios.get("/api/jobs", { params });
            dispatch({
                params,
                type: constant.jobs.SORT_JOBS,
                payload: jobs.data,
            });
        } catch (e) {
            throw e;
        }
    };

    const filterJobs = async (params) => {
        try {
            const { data } = await axios.get("/api/jobs", { params });
            dispatch({
                params,
                type: constant.jobs.FILTER_JOBS,
                payload: data
            });
        } catch (e) {
            throw e;
        }
    };
    return { state, getJobs, sortJobs, filterJobs, searchJobs,clearSearch };
};

export default jobsAction;