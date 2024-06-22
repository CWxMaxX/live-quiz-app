import React from 'react'
import SectionRow from '../components/SectionRow'
import NavBar from '../components/NavBar'
import SectionColumn from '../components/SectionColumn'

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <SectionRow className="justify-center items-center mt-16 px-5">
        <div className='max-w-[500px] w-full bg-white px-10 py-5 text-left mr-5 rounded'>Quiz Name</div>
        <button className='max-w-[100px] w-full text-white bg-blue-500 px-5 py-5 text-center rounded hover:brightness-90'>Start</button>
      </SectionRow>
      <SectionRow className='justify-center items-center mt-16 font-extrabold sm:text-9xl text-7xl text-gray-700 px-5'>
        <div>30</div>
        <div className='mx-3'>:</div>
        <div>00</div>
      </SectionRow>
      <SectionColumn className='justify-center items-center mt-16 px-5'>
        <div className='bg-white rounded min-h-32 max-w-[600px] p-5 text-left'>
          <h2 className='text-2xl'>Instructions</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam, pariatur modi neque maxime non eveniet ducimus dolor nulla perspiciatis eos odit! Aperiam a itaque, nam debitis praesentium consectetur perferendis!</p>
        </div>
        <button className='mt-16 max-w-[300px] w-full text-white bg-blue-500 px-5 py-5 text-center rounded hover:brightness-90'>Start</button>
      </SectionColumn>
    </div>
  )
}

export default Dashboard