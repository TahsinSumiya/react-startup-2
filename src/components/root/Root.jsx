import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Root = () => {
  return (
    <>
    <div className='max-w-6xl mx-auto'>
    <Header/>
    <Outlet/>
    </div>
 
      <Footer/>
    </>
  )
}

export default Root
