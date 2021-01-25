import React, { useState } from "react";
import {context} from "../providers/AppProvider";
import {hospital_initials} from "../utils/index";
import Moment from "react-moment";


const JobDescription = React.memo(({job_description}) => {
    const [isDetailsShowing, showDetails] = useState(false);

    return (
        <div className="mb-6 cursor-pointer md:flex md:justify-between items-center">
            <div className="flex items-start text-left flex-col" onClick={() => showDetails(!isDetailsShowing)}>
                <span className="font-bold">{job_description.job_title}</span>
                <span>{`${job_description.job_type} | $${job_description.salary_range[0]} - $${job_description.salary_range[1]} an hour | ${job_description.city}`}</span>
            </div>
                <span>
                    <Moment fromNow>{job_description.created}</Moment>
                </span>

            {isDetailsShowing && (
                <div
                    className="flex flex-col lg:flex-row w-full"
                >
                    <div className="flex flex-1 flex-col md:p-1">
                        <div className="flex flex-col lg:flex-row mb-2">
                            <span className="font-bold w-full md:w-7/12">Department:</span>
                            <p className="w-full md:w-5/12">
                                {job_description.department.join().replaceAll(",", ", ")}
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row mb-2">
                            <span className="font-bold w-full md:w-7/12">Hours / shift:</span>
                            <p className="w-5/12">{`${job_description.hours[0]} hours / shift`}</p>
                        </div>
                    </div>
                    <div className="flex lg:w-48 lg:flex-col lg:items-end">
                        <button
                            className=" bg-blue-500 text-white rounded-md px-5 py-2 m-1"
                        >
                            Job details
                        </button>
                        <button
                            className="border border-blue-500 text-blue-500 rounded-md px-5 py-2 m-1"
                        >
                            Save job
                        </button>
                    </div>
                </div>
            )}
        </div>

    );
});

export default JobDescription;