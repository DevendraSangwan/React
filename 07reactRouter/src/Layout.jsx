import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' // it is using because it only change mid part not header or foooter.


function Layout() {
  return (
    <>
    <Header/>
    <Outlet /> 
    <Footer />
    </>
  )
}

export default Layout