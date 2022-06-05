import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='h-full relative flex flex-col justify-center items-start'>
      <div className="absolute top-0 left-0 h-20 bg-teal-800 w-full flex items-center pl-8">
        <h2 className='text-2xl uppercase'>logo</h2>
      </div>
      <ul className='flex justify-start items-start flex-col pl-8'>
        <li className='mt-8'><Link to='/'>Home</Link></li>
        <li className='mt-8'><Link to='/login'>Login</Link></li>
        <li className='mt-8'><Link to='/register'>Register</Link></li>
        <li className='mt-8'>Again Link</li>
        <li className='mt-8'>More </li>
      </ul>
    </div>
  )
}

export default Sidebar