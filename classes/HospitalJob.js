"use strict";

class HospitalJob{
    constructor(job_details, job_items) {
        this.total_jobs_in_hospital = job_items.length;
        this.name =  job_details.name;
        this.job_title = job_details.job_title;
        this.items = job_items;
    }

    get job(){
        return {
            ...this
        };
    }
}

export default HospitalJob;