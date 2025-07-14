import axios from 'axios';
const API='http://localhost:5000/api/jobs';
export const fetchJobs=async()=> (await axios.get(API)).data;
export const fetchStats=async()=> (await axios.get(API+'/stats')).data;
export const addJob=async(job)=>(await axios.post(API,job)).data;
export const updateJob=async(id,job)=>(await axios.put(`${API}/${id}`,job)).data;
export const deleteJob=async(id)=>(await axios.delete(`${API}/${id}`)).data;
