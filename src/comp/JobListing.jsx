import React from 'react'
import jobs from '../jobs.json'
import { JobUI } from './JobUI';
import { useState, useEffect } from 'react';


export const JobListing = ({isHome = false}) => {

  const [jobs, setJob] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const fetchJobs = async()=>{
   try {
    const res = await fetch('http://localhost:8000/jobs')
    const data = await res.json()
    setJob(data)
   } catch (error) {
    throw new Error('Unable to fetch jobs')
   }finally{
    setLoading(false)
   }
}
fetchJobs()
}, [])
    // const joblisting = isHome ? jobs.slice(0,3) : jobs
  return (
    <div> <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
      {isHome ? 'Recent Jobs' : 'Browse Jobs'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {loading ? 'loading...': <>{jobs.map((job)=>(
             <JobUI key={job.id} job ={job}/>
        ))} </>}
        
        
        {/* <!-- Job Listing 3 --> */}
        
         
      </div>
    </div>
  </section></div>
  )
}
