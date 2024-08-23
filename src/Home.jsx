import React from 'react'
import Sidebar from './common/Sidebar'
import Header from './common/Header'
import Breadcrumb from './common/Breadcrumb'
import Dashboard from './Pages/Dashboard'

export default function Home() {
  return (
    <>
    <section className='w-full'>
      <Dashboard/>
      {/* <div className='grid grid-cols-[16.5%_auto]'>
        <div>
          <Sidebar/>
        </div>
        <div>
          <Header/>
          <Breadcrumb/>
          <div className='w-full h-[610px]'>
          <Dashboard/>
          </div>
        </div>
      </div> */}
    </section>
    </>
  )
}

