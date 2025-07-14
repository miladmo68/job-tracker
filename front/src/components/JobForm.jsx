import {useState} from 'react';
import {addJob} from '../utils/api';
export default function JobForm({onCreated}){
 const [form,setForm]=useState({position:'',company:'',status:'Applied'});
 const handleChange=e=>setForm({...form,[e.target.name]:e.target.value});
 const submit=async e=>{e.preventDefault();await addJob(form);setForm({position:'',company:'',status:'Applied'});onCreated();};
 return(<form onSubmit={submit} className='mb-4 space-y-2'>
  <input name='position' value={form.position} onChange={handleChange} placeholder='Position' className='input input-bordered w-full'/>
  <input name='company' value={form.company} onChange={handleChange} placeholder='Company' className='input input-bordered w-full'/>
  <select name='status' value={form.status} onChange={handleChange} className='select select-bordered w-full'>
   {['Applied','Interview','Offer','Rejected'].map(s=><option key={s}>{s}</option>)}
  </select>
  <button className='btn btn-primary'>Add Job</button>
 </form>);
}
