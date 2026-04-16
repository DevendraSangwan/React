import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' // it is using because it only change mid part not header or foooter.


function Layout() {
  return (
    <>
    <Header/>
    <Outlet /> 
    {/* //MEANS sirf ye change hoga but header or footer kabhi change nhi honge  */}
    <Footer />
    </>
  )
}

export default Layout