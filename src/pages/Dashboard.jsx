import React from 'react'
import SectionRow from '../components/SectionRow'
import NavBar from '../components/NavBar'

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <SectionRow className="justify-center items-center">
        <div className=''>Quiz Name</div>
        <div>Start</div>
      </SectionRow>
    </div>
  )
}

export default Dashboard