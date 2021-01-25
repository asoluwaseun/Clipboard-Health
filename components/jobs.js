import React, { useState } from "react";
import {context} from "../providers/AppProvider";
import {hospital_initials} from "../utils/index";
import JobDescription from "./job_description";

const sorters = ["Location", "Role", "Department", "Education", "Experience"];

const Jobs = React.memo(({job_details}) => {
    const [isDetailsShowing, showDetails] = useState(false);

    return (
        <div className="mb-6"
        >
            <div className="flex items-center cursor-pointer " onClick={() => showDetails(!isDetailsShowing)}>
                <div className="flex uppercase p-1 rounded-lg justify-center items-center bg-gray-300">
              <span className="text-white text-lg flex items-center justify-center w-6 h-6">
                {hospital_initials(job_details.name)}
              </span>
                </div>

                <span className="ml-4 text-left">
                    {job_details.total_jobs_in_hospital} jobs for {job_details.name}
            </span>
            </div>

            {isDetailsShowing && (
                <div className="flex flex-col w-full mt-2">
                    {job_details.items.map((item, index) => (
                        <div className="border border-b-0 border-l-0 border-r-0 border-t-1 py-2">
                            <JobDescription key={index} job_description={item}/>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
});

export default Jobs;