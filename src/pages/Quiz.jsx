import React from 'react'
import NavBar from '../components/NavBar'
import SectionColumn from '../components/SectionColumn'
import QuizInstructionsView from '../components/QuizInstructionsView'
import MCQView from '../components/MCQView'
import ResultsView from '../components/ResultsView'

const Quiz = () => {
  return (
    <div className='flex justify-center'>
      {/* <QuizInstructionsView /> */}
      {/* <MCQView/> */}
      <ResultsView/>
    </div>
  )
}

export default Quiz