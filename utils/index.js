const utils = {
    underscore_remover(name){
        name = name.split("_");

        if(name.length > 1){
            let _name = " ";

            for(let i = 0; i < name.length; i++){
                _name += ` ${name[i]}`;
            }
            return _name;
        }
        else{
            return name[0];
        }
    },

    total_jobs_counter(jobs){
        let counter = 0;
        for(let i = 0; i < jobs.length; i++){
            counter += jobs[i].total_jobs_in_hospital;
        }
        return counter;
    },

    hospital_initials(name){
        return name.substr(0, 2);
    }
}

module.exports = utils;