import React from 'react'
import {Outlet} from 'react-router-dom'
import { Nav } from './comp/Nav';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Layout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    <ToastContainer/>
    </>
  )
}

export default Layout