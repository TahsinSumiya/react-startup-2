import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveapplication } from '../../utility/LocalStorage';
const JobsDetail = () => {
    const jobs = useLoaderData();
    const {id}=useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job=>job.id===idInt)
 
 const applyhandlejob  =(e)=>{
    saveapplication(idInt)
    toast("you have applied succesfully")
 }
  return (
    <div className='my-5'>

<div className="border mx-5">
    <div className='mx-5'>   <img src={job.logo} alt="" srcset="" />
   <p className='text-3xl'>{job.job_title}</p>
   <p className='my-2 font-bold'>name: {job.company_name}</p>
   <p className='my-2'>description : {job.job_description}</p>
   <p className='my-4 '>responsbility: {job.job_responsibility}</p>
   <p className='my-2 font-semibold'>{job.educational_requirements}</p>
   <p className='my-2 font-semibold'>{job.experiences}</p>
  
    <div>

<button onClick={applyhandlejob} class="bg-blue-500 my-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
 Apply now
</button>
<ToastContainer />
    </div></div>



</div>
    </div>
  )
}

export default JobsDetail