import React from 'react'
import jobs from '../jobs.json'
import { JobUI } from './JobUI';
import { useState, useEffect } from 'react';
import Spinners from './Spinners';


export const JobListing = ({ isHome = false }) => {

  const [jobs, setJob] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchJobs = async () => {
      const url = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try {
        const res = await fetch(url)
        const data = await res.json()
        setJob(data)
      } catch (error) {
        throw new Error('Unable to fetch jobs')
      } finally {
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

        {loading ? <Spinners loading={loading} /> : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobUI key={job.id} job={job} />
          ))} </div>}


        {/* <!-- Job Listing 3 --> */}



      </div>
    </section></div>
  )
}
