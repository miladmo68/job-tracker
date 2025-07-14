import { useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [view,setView]=useState('home');
  return (
    <div className='container mx-auto p-6'>
      <nav className='mb-6 flex gap-4'>
        <button className={`btn ${view==='home'?'btn-primary':''}`} onClick={()=>setView('home')}>Jobs</button>
        <button className={`btn ${view==='dashboard'?'btn-primary':''}`} onClick={()=>setView('dashboard')}>Dashboard</button>
      </nav>
      {view==='home'?<Home/>:<Dashboard/>}
    </div>
  );
}
