import React from 'react'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import Layout from './Layout';
import { Jobs } from './pages/Jobs';
import { PageNotFound } from './pages/PageNotFound';
import { JobPage } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import { EditJobPage } from './pages/EditJobPage';



 
const App = () => {

// add jobs 
  const addJOBS = async(newjob)=>{
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newjob)
    });
    return;
  }

// delete jobs 

const deleteJobs = async(id)=>{
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE',
  });
  return;
}

// Edit Job 

const JobEdited = async(id, update)=> {
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(update)
  });
  return;
}

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/> 
        <Route path='/jobs' element={<Jobs />}/> 
        <Route path='/add-job' element={<AddJobPage submitnewjob={addJOBS}/>}/> 
        <Route path='/job/:id' element={<JobPage deleteJob={deleteJobs} />}/> 
        <Route path='/job-edit/:id' element={<EditJobPage updateJob={JobEdited} />}/> 
    </Route>) 
  )

  return <RouterProvider router={router}/>
  }


export default App