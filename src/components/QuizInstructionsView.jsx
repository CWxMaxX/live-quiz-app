import React from 'react'
import SectionColumn from './SectionColumn'

const QuizInstructionsView = () => {
    return (
        <SectionColumn className='max-w-[600px] min-h-without-navbar justify-between items-center'>
            <SectionColumn className='w-full min-h-[300px]'>
                <SectionColumn className='justify-center items-center mt-44 px-10'>
                    <h2 className='text-4xl' >Quiz Name</h2>
                    <p className='mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem vitae aspernatur quam excepturi sequi obcaecati ab dolores odit, nam quas aliquid nemo vel officia. Debitis facere amet reprehenderit eaque.</p>
                    <button className='mt-16 max-w-[300px] w-full text-white bg-blue-500 px-5 py-5 text-center rounded hover:brightness-90'>Start</button>
                </SectionColumn>
            </SectionColumn>
        </SectionColumn>
    )
}

export default QuizInstructionsView