import constants from "../constants";

const jobs = (state, action) => {
    if(constants.jobs[action.type]){
        if(constants.jobs[action.type] === "CLEAR_SEARCH"){
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    current_search: ""
                }
            }
        }
        if(constants.jobs[action.type] === "SET_SORTER"){
            let sorters = {
                ...state.jobs.sorters
            };

            for(let sorter in sorters){
                if(sorter != action.payload.sorter){
                    sorters[sorter] = "";
                }
                else{
                    sorters[action.payload.sorter] = action.payload.order;
                }
            }
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    sorters: {
                        ...sorters
                    }
                }
            }
        }
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
