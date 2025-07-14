import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer} from 'recharts';
export default function StatusChart({data}){
 const chartData=Object.entries(data).map(([status,count])=>({status,count}));
 return(
  <div className='card bg-base-100 shadow p-4'>
   <h2 className='text-xl font-bold mb-2'>Applications by Status</h2>
   <div style={{width:'100%',height:300}}>
    <ResponsiveContainer>
     <BarChart data={chartData}><XAxis dataKey='status'/><YAxis allowDecimals={false}/><Tooltip/><Bar dataKey='count' /></BarChart>
    </ResponsiveContainer>
   </div>
  </div>
 );
}
