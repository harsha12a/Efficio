import React from 'react'
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import { Outlet } from 'react-router-dom'
function Rootlayout() {
  return (
    <div>
        <Header/>
        <div style={{minHeight:"100vh"}}>
            <Outlet/></div>
        <Footer/>
    </div>
  )
}

export default Rootlayout