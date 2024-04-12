import React from 'react'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import Layout from './Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/> 
  </Route>) 
)
 
const App = () => {
  return <RouterProvider router={router}/>
  }


export default App