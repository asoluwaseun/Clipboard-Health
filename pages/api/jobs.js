import jobs from '../../data/jobs'
import Jobs from '../../classes/Jobs'

export default async (req, res) => {
  res.statusCode = 200
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))
  let JobsClass = new Jobs(jobs);
  let _jobs = [];

  if(req.query.search || req.query.sort || req.query.filter){
    if(req.query.search){
      _jobs = JobsClass.search(decodeURIComponent(req.query.search));
    }
    if(req.query.sort){
      _jobs = JobsClass.sort(req.query.sort);
    }
    if(req.query.filter){
      _jobs = JobsClass.filter(req.query.filter);
    }
  }
  else{
    _jobs = JobsClass.jobs;
  }

  res.json(_jobs);
}
