'use client'
import Image from 'next/image'
import { Box } from '@mui/material'


export default function Home() {
  return (
    <main className=''>
      <Box>
        <Box component='img'
          src='/background.jpg'
          sx={{
            width: '100%',
            height: '100%'
          }}>
        </Box>
      </Box>
    </main>
  )
}
