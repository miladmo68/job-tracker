import {useContext} from 'react';
import {JobContext} from '../context/JobContext';
import StatusChart from '../components/StatusChart';
export default function Dashboard(){
 const {stats}=useContext(JobContext);
 return(<>
  <h1 className='text-3xl font-bold mb-4'>Dashboard</h1>
  <StatusChart data={stats}/>
 </>);
}
