import constants from "../constants";

const filters = (state, action) => {
    if(constants.filters[action.type]){
        return {
            ...state,
            filters: {
                ...action.payload
            }
        }
    }
    else{
        return state;
    }
};

export default filters;
