import React from "react";
import getFiltersAction from "../actions/filters";
import getJobsAction from "../actions/jobs";
import filtersReducer from "../reducers/filters";
import jobsReducer from "../reducers/jobs";

export const context = React.createContext({
    filters: {},
    jobs: {
        list: [],
        current_filter: "",
        current_sort: "",
        current_search: "",
        sorters: {
            location: "",
            required_skills: "",
            department: "",
            required_credential: "",
            experience: "",
        }
    },
    search: () => {},
    filter: () => {},
    sort: () => {},
    clearSearch: () => {}
});

const AppProvider = (props) => {
    const { state: filters, getFilters } = getFiltersAction(filtersReducer, {
        filters: {},
    });
    const {
        getJobs,
        filterJobs,
        sortJobs,
        searchJobs,
        clearSearch,
        state: jobs
    } = getJobsAction(jobsReducer, {
        jobs: {
            list: [],
            current_filter: "",
            current_sort: "",
            current_search: "",
            sorters: {
                location: "",
                required_skills: "",
                department: "",
                required_credential: "",
                experience: "",
            }
        }
    });

    React.useEffect(async () => {
        await getFilters();
        await getJobs();
    }, []);

    const contextValue = React.useMemo(() => {
        return {
            filters: filters.filters,
            jobs: jobs.jobs,
            sort: sortJobs,
            filter: filterJobs,
            search: searchJobs,
            clearSearch: clearSearch
        };
    }, [filters, jobs]);

    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    );
};

export default AppProvider;
