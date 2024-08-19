'use client'
import { RotateCw } from 'lucide-react'
import React from 'react'
import { mainContext } from '~/context/mainContext'

const Reload = () => {
  const {setType} = mainContext()
  return (
    <div className='w-full flex items-center justify-center'>
        <RotateCw onClick={()=>setType('time')} className='size-12 cursor-pointer text-[#6D9886] transition-all duration-200 hover:text-black'/>
    </div>
  )
}

export default Reload