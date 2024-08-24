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
    </section>
    </>
  )
}

