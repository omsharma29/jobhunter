import React from 'react'
import { Hero } from '../comp/Hero'
import { HomeCards } from '../comp/HomeCards';
import { JobListing } from '../comp/JobListing';
import { ViewAllJobs } from '../comp/ViewAllJobs';


export const HomePage = () => {
  return (
    <>
    <Hero  title = "Start Your Software Dev Career" subtitle = "Find the Software job that fits your skills and needs" />
    <HomeCards/>
    <JobListing/>
    <ViewAllJobs/>
    
    </>
  )
}
