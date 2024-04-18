import React from 'react'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import Layout from './Layout';
import { Jobs } from './pages/Jobs';
import { PageNotFound } from './pages/PageNotFound';
import { JobPage } from './pages/JobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/jobs' element={<Jobs />}/> 
      <Route path='/job/:id' element={<JobPage />}/> 
      <Route path='/add-job' element={<PageNotFound />}/> 
  </Route>) 
)
 
const App = () => {
  return <RouterProvider router={router}/>
  }


export default App