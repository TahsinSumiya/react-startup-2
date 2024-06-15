import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getstoredjobapplication } from '../../utility/LocalStorage';

const AppliedJobs = () => {
  const jobs = useLoaderData() || []; // Ensure jobs is always an array
  const [displayJobs, setDisplayJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const handleJobsfilter = (filter) => {
    if (filter === 'all') {
      setDisplayJobs(appliedJobs);
    } else if (filter === 'remote') {
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remoteJobs);
    } else if (filter === 'onsite') {
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobsId = getstoredjobapplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter(job => storedJobsId.includes(job.id));
      console.log("Jobs:", jobs);
      console.log("Stored Jobs IDs:", storedJobsId);
      console.log("Applied Jobs:", jobsApplied);
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied); // Initialize displayJobs with the fetched applied jobs
    }
  }, [jobs]);

  return (
    <div>
      <h3 className='text-center text-3xl'>Applied jobs: {appliedJobs.length}</h3>

      <details className="dropdown">
        <summary className="m-1 btn">Filter Jobs</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsfilter('all')}><a>All</a></li>
          <li onClick={() => handleJobsfilter('remote')}><a>Remote</a></li>
          <li onClick={() => handleJobsfilter('onsite')}><a>Onsite</a></li>
        </ul>
      </details>

      <ul>
        {displayJobs.map(job => (
          <div key={job.id} className='my-5'>
            <div className="border mx-5">
              <div className='mx-5'>
                <img src={job.logo} alt="" />
                <p className='text-3xl'>{job.job_title}</p>
                <p className='my-2 font-bold'>Name: {job.company_name}</p>
                <p className='my-5 font-bold'>Type: {job.remote_or_onsite}</p>
                <p className='my-2'>Description: {job.job_description}</p>
                <p className='my-4'>Responsibility: {job.job_responsibility}</p>
                <p className='my-2 font-semibold'>{job.educational_requirements}</p>
                <p className='my-2 font-semibold'>{job.experiences}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
