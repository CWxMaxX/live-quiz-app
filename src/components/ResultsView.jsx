import React from 'react'
import SectionColumn from './SectionColumn'

const ResultsView = () => {
  return (
    <SectionColumn className='h-screen justify-center items-center'>
      <div className='text-[30px] mb-20' >Quiz Name</div>
      <div className='w-[300px] h-[300px] bg-blue-300 rounded-[50%] flex justify-center items-center' >
        <div className='text-[100px] font-bold text-gray-800 pl-10'>75<span className='text-[50px]'>%</span></div>
      </div>
      <div className='text-[30px] mt-10 pb-10'>Summary</div>
    </SectionColumn>
  )
}

export default ResultsView