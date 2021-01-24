"use strict";
import HospitalJob from "./HospitalJob";

class Jobs {
    constructor(jobs) {
        this._jobs = jobs;
    }

    set jobs(_jobs){
        this._jobs = _jobs;
    }
    get jobs(){
        return this._jobs;
    }

    search(search) {
        let _search = "";
        if (!search || search === "") {
            return this.jobs;
        } else {
            _search = search.toLowerCase();

            let _results = [];

            for(let i = 0; i < this.jobs.length;i++){
                if(this.jobs[i].job_title.toLowerCase().indexOf(_search) > -1){
                    _results.push(new HospitalJob(this.jobs[i], this.jobs[i].items).job);
                }
                else if(this.jobs[i].name.toLowerCase().indexOf(_search) > -1){
                    _results.push(new HospitalJob(this.jobs[i], this.jobs[i].items).job);
                }
                else{
                    let job_items = this.jobs[i].items;

                    let _filtered = job_items.filter((item)=>{
                        for(let prop in item){
                            if(typeof(item[prop]) === "object"){
                                return item[prop].includes(_search);
                            }
                            else{
                                return item[prop].toLowerCase().indexOf(_search) > -1;
                            }
                        }
                    });
                    if(_filtered.length > 0){
                        _results.push(new HospitalJob(this.jobs[i], _filtered).job);
                    }
                }

            }
            this.jobs = _results;
            return this.jobs;
        }
    }

    filter(qs) {
        let filters = ["department","work_schedule", "experience", "job_type"];
        let filtered = [];

        if (!qs || qs === "") {
            return this.jobs;
        } else {
            let _qs = qs.split(":");
            let filter = _qs[0];
            qs = _qs[1];
            if(!filters.includes(filter)){
                return this.jobs;
            }

            for(let i = 0; i < this._jobs.length; i++){
                let job_items = this._jobs[i].items;
                let _filtered = job_items.filter((item)=>{
                    if(typeof(item[filter]) === "object"){
                       return item[filter].includes(qs);
                    }
                    else{
                        return item[filter] === qs;
                    }
                });
                if(_filtered.length > 0){
                    filtered.push(new HospitalJob(this._jobs[i], _filtered).job);
                }
            }

            this.jobs = filtered;
            return this.jobs;
        }
    }

    sort(qs) {
        const sort_params = qs.split(":");
        let sorted = [];

        for(let i = 0; i < this._jobs.length; i++){
            let job_items = this._jobs[i].items;

            let _sorted = job_items.sort((a, b) =>{
                return check_order(sort_params[1], a[sort_params[0]], b[sort_params[0]]);
            });

            sorted.push(new HospitalJob(this.jobs[i], _sorted).job);
        }

        sorted = sorted.sort((a, b)=>{
            return check_order(sort_params[1], a.items[0][sort_params[0]], b.items[0][sort_params[0]]);
        })

        function check_order(order = "asc", a, b){
            if(order === "desc"){
                if(typeof a === "object"){
                    return b.length > a.length ? true : false;
                }
                else{
                    return b.localeCompare(a);
                }
            }
            else{
                if(typeof a === "object"){
                    return a.length > b.length ? true : false;
                }
                else{
                    return a.localeCompare(b);
                }
            }
        }
        this.jobs = sorted;
        return this.jobs;
    }
}

export default Jobs;