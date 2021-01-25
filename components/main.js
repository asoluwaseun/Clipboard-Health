import React from "react";
import {context} from "../providers/AppProvider";
import {total_jobs_counter} from "../utils/index";
import Jobs from "./jobs";

const sorters = [
    {
        name: "Location",
        identifier: "location"
    },
    {
        name: "Role",
        identifier: "required_skills"
    },
    {
        name: "Department",
        identifier: "department"
    },
    {
        name: "Education",
        identifier: "required_credentials"
    },
    {
        name: "Experience",
        identifier: "experience"
    }
];

const Main = React.memo(()=> {
    const _context = React.useContext(context);

    const sorter = (identifier)=>{
        let order = "asc";
        if(_context.jobs.sorters[identifier] === "asc"){
            order = "desc";
        }
        else if(_context.jobs.sorters[identifier] === "desc"){
            order = "";
        }

        _context.sort({
            sort: `${identifier}:${order}`,
            sorter: identifier,
            order: order,
            filter: _context.jobs.current_filter,
            search: _context.jobs.current_search
        });
    }
    return (
        <div className="w-full lg:ml-3 lg:w-3/4">
            <div className="h-15 p-3 bg-white rounded-sm shadow-sm">
                <div className="flex p-3">
                    <div className="w-full md:w-3/12">
                        <span className="font-bold">{total_jobs_counter(_context.jobs.list)}</span> job postings
                    </div>

                    <div className="hidden md:block md:w-9/12 float-right">
                        <ul>
                            <li className="text-gray-400 mx-3 inline-block">Sort by: </li>
                            {
                                sorters.map((sort,i)=>{
                                    return (
                                        <li key={i} className="mx-3 cursor-pointer font-bold inline-block"
                                        onClick={()=>{
                                           sorter(sort.identifier);
                                        }}
                                        >
                                            <span className="flex items-center">
                                                <span>{sort.name}</span>
                                                <div className="ml-1 w-2 h-2">
                                                    {
                                                        _context.jobs.sorters[sort.identifier] && _context.jobs.sorters[sort.identifier] === "asc" &&
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.85 451.85">
                                                            <path d="M248.3 106.4l194.27 194.3a31.64 31.64 0 01-44.74 44.74l-171.9-171.91L54.01 345.44a31.65 31.65 0 01-44.75-44.75L203.55 106.4a31.54 31.54 0 0122.37-9.26c8.1 0 16.2 3.1 22.37 9.27z" />
                                                        </svg>
                                                    }
                                                    {
                                                        _context.jobs.sorters[sort.identifier] && _context.jobs.sorters[sort.identifier] === "desc" &&
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.85 451.85">
                                                            <path d="M225.92 354.7c-8.1 0-16.2-3.09-22.37-9.26L9.27 151.16a31.64 31.64 0 1144.75-44.75l171.9 171.91 171.9-171.9a31.64 31.64 0 0144.75 44.74L248.3 345.45a31.55 31.55 0 01-22.37 9.26z" />
                                                        </svg>
                                                    }
                                            </div>
                                            </span>

                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                {
                    _context.jobs.list.map((job,index)=>{
                        return( <Jobs
                            key={index}
                            job_details={job}
                            />);
                    })
                }
            </div>
        </div>
    );
});

export default Main;