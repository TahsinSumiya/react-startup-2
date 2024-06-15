import React, { useEffect, useState } from 'react'
import Jobs from '../job/Jobs'

const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([])
    const [datalength,setdataLength]=useState(4)
    useEffect(()=>{
        fetch('jobs.json').then(res=>res.json()).then(data=>setJobs(data))
    },[])
  return (
    <>
    <div className='my-5'>
           <h2 className='text-6xl text-center '>Featured Jobs</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nihil!</p>

       <div className='grid grid-cols-2 gap-6 my-5 '>
        {jobs.slice(0,datalength).map(job=><Jobs key={job.id} job={job}/>)}
       
    
        </div>  
        <div className={datalength === jobs.length ? 'hidden' : 'justify-center flex'} >
      
      <button onClick={()=>setdataLength(jobs.length)} class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      show all jobs
      </button>
            </div>
    </div>
   
    </>
  )
}

export default FeaturedJobs
