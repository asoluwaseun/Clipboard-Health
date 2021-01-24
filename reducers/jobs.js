import constants from "../constants";

const jobs = (state, action) => {
    if(constants.jobs[action.type]){
        return {
            ...state,
            jobs: {
                ...state.jobs,
                list: action.payload,
                current_filter: action.type === "FILTER_JOBS" ? action.params.filter : state.jobs.current_filter,
                current_sort: action.type === "SORT_JOBS" ? action.params.sort : state.jobs.current_sort,
                current_search: action.type === "SEARCH_JOBS" ? action.params.search : state.jobs.current_search
            }
        }
    }
    else{
        return state;
    }
};

export default jobs;
