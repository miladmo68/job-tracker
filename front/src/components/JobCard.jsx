import {deleteJob} from '../utils/api';
export default function JobCard({job,onDelete}){
 const remove=async()=>{await deleteJob(job._id);onDelete();};
 return(
  <div className='card bg-base-100 shadow p-4 mb-3 flex justify-between items-center'>
   <div>
    <h3 className='font-bold'>{job.position} @ {job.company}</h3>
    <p className='text-sm opacity-70'>{job.status}</p>
   </div>
   <button className='btn btn-error btn-xs' onClick={remove}>Delete</button>
  </div>
 );
}
