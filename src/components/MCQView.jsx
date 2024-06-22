import React from 'react'
import SectionColumn from './SectionColumn'
import SectionRow from './SectionRow'
import { Box, Button, Pagination, Stack } from '@mui/material'
import LinearProgressWithLabel from './LinearProgressWithLabel'

const answerButtonStyle = {
    textTransform: 'none',
    justifyContent: 'flex-start',
    height: 50
}

const MCQView = () => {
    return (
        <SectionColumn className='max-w-[600px] min-h-screen justify-between items-center'>
            <SectionColumn className='w-full min-h-[300px]'>
                <SectionRow className='w-full justify-between items-center p-5'>
                    <h2 className='text-2xl' >Quiz Name</h2>
                    <h2 className='text-2xl' >30:00</h2>
                </SectionRow>
                <SectionRow className='w-full pb-3 px-5'>
                    <Box sx={{width: '100%'}}>
                    <LinearProgressWithLabel value={2} all={10}/>
                    </Box>
                </SectionRow>
                <SectionRow className='w-full justify-center'>
                    <Pagination count={10} variant="outlined" shape="rounded" color='primary' />
                </SectionRow>
                <SectionRow className='w-full p-10'>
                    <p className='text-justify'><span className='text-1xl font-bold'>1. </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos, est dignissimos quo fugit vel, molestias ipsam sint incidunt delectus consequuntur maxime, praesentium qui. Officia, tempora. Cum debitis delectus asperiores!</p>
                </SectionRow>
            </SectionColumn>
            <SectionColumn className='w-full justify-center items-center '>
                <Stack spacing={2} className='w-full justify-center items-center p-10' >
                    <Button sx={answerButtonStyle} size='large' variant="outlined" fullWidth>1. Test Answer</Button>
                    <Button sx={answerButtonStyle} size='large' variant="outlined" fullWidth>2. Test Answer</Button>
                    <Button sx={answerButtonStyle} size='large' variant="outlined" fullWidth>3. Test Answer</Button>
                    <Button sx={answerButtonStyle} size='large' variant="outlined" fullWidth>4. Test Answer</Button>
                </Stack>
            </SectionColumn>
        </SectionColumn>
    )
}

export default MCQView