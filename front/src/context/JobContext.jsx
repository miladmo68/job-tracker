import {createContext,useState,useEffect} from 'react';
import {fetchJobs,fetchStats} from '../utils/api';
export const JobContext=createContext();
export function JobProvider({children}){
 const [jobs,setJobs]=useState([]);
 const [stats,setStats]=useState({});
 const refresh=async()=>{setJobs(await fetchJobs());setStats(await fetchStats());};
 useEffect(()=>{refresh();},[]);
 return(<JobContext.Provider value={{jobs,setJobs,stats,refresh}}>{children}</JobContext.Provider>);
}
