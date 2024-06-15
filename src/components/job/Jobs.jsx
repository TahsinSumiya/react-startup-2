import React from 'react'
import { Link } from 'react-router-dom'

const Jobs = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job
  return (
    <>
      <div>

      {/* <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={logo} alt="logo"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div> */}
   <div className="card glass">
  <figure><img src={logo} alt="logo"/></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className='flex '>
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold mx-1
     hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">{remote_or_onsite}</button>
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold mx-1
     hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">{job_type}</button>
    </div>
    <p>location: {location}</p>
    
    <div className="card-actions justify-end">
        <p>salary: {salary}</p>
        <Link to={`job/${id}`}>  <button className="btn btn-primary hover:bg-emerald-700">show details</button></Link>
    
    </div>
  </div>
</div>    
      </div>
    </>
  )
}

export default Jobs
