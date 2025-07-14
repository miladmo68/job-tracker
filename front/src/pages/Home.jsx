import {useContext} from 'react';
import {JobContext} from '../context/JobContext';
import JobForm from '../components/JobForm';
import JobCard from '../components/JobCard';
export default function Home(){
 const {jobs,refresh}=useContext(JobContext);
 return(<>
  <h1 className='text-3xl font-bold mb-4'>Job Applications</h1>
  <JobForm onCreated={refresh}/>
  {jobs.map(j=><JobCard key={j._id} job={j} onDelete={refresh}/>) }
 </>);
}
