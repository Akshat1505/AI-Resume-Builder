import Header from '@/components/custom/Header'
import Dashboard from '@/dashboard/Dashboard'
import { UserButton } from '@clerk/clerk-react' // gives the pfp of the logged in acc after u auth
import React from 'react'

function Home() {
  return (
    <div>
      <Header/>
      <Dashboard/>
    </div>
  )
}

export default Home