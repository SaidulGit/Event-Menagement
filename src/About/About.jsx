import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>

      <div className='w-4/5 mx-auto min-h-screen'>
        <img className='h-screen border-solid rounded-lg w-full' src="https://i.ibb.co/r6j685P/pexels-yan-krukau-8613312.jpg" alt="" />

        <br /> <br />
        <div className='w-3/4 mx-auto'>
        <p className='text-center'>We believe taking time out for a retreat can be a truly transformative experience for all women. We delight in creating personal and authentic experiences in beautiful environments and invite you to escape regular life and enter into a divine space filled with fun, laughter and renewal. We appreciate that fully experiencing the simple joys in life can lead to a profound sense of inner happiness and peace; simple pleasures like the feeling of sunshine on your face, your bare toes in the sand and tucking an island frangipani flower behind your ear. Through exploring our inner and outer worlds, we open ourselves up to a life filled with endless possibilities.</p>
        <br /> <br /> 

        <div className='w-full text-center space-x-3'>
        <NavLink to='/'><button className='text-2xl font-semibold bg-rose-300 px-4 py-2 rounded-lg'>Home</button></NavLink>
        <NavLink to='/contact'><button className='text-2xl font-semibold bg-green-400 px-4 py-2 rounded-lg'>Contact us</button> </NavLink> <br /><br />
        </div>
        
        </div>
        
      </div>
    </div>
    
  )
}

export default About