import React from 'react'
import { Search } from './Search'

export const SearchJob:React.FC = () => {
  return (
    <div className='flex flex-col items-start justify-end'>
        <h1 className='text-secondary font-[700] text-[30px] lg:text-[60px] '>Head Hunter</h1>
        <h2 className='text-[#676767]  text-[20px] lg:text-[32px] lg:font-[500] '>Job for everyone</h2>
        <Search/>
    </div>
  )
}
