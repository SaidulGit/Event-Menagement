import React from 'react'
import { NavLink } from 'react-router-dom'


const Errorpage = () => {
  return (
    <div className='w-2/4 mx-auto'>

       <img src="https://i.ibb.co/z4LM21v/404-error-page-templates.jpg" alt="" />

       <h2 className='text-center text-4xl font-bold'>Go to <NavLink className=' text-blue-400' to='/'>Home</NavLink></h2>



    </div>
  )
}

export default Errorpage