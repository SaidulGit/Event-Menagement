import React from 'react'
import { NavLink } from 'react-router-dom'

const Offer = () => {
  return (
    <div>
    <div className='w-4/5 mx-auto'>
      <img className='h-screen w-full rounded-lg' src="https://i.ibb.co/rZhCBYk/pexels-sora-shimazaki-5668858.jpg" alt="" />
    </div><br /> <br />
    <div className='w-3/4 text-center mx-auto'>
      <h2 className='text-center text-base text-black font-medium'>Want to know what to expect on a Goddess Retreat? Watch our videos below!</h2><br /> <br />
      <p>As one of the world’s first dedicated yoga & wellness retreats for women since 2003, we are truly passionate about providing a positive environment and empowering experiences that can be transformative, emotionally, physically and spiritually. We welcome women of all ages, sizes, and backgrounds from all over the world, so you will always feel at home with us. Whether your are travelling with friends or going solo, from the moment you step off the plane you are taken care of, so all you have to do is show up and enjoy! Read almost two decades worth of testimonials from our guests on Tripadvisor.</p><br /><br />
      <p>Got a Question? Visit our <span className='text-base font-medium text-black'>FAQs page </span>for answers to many of our guests most asked questions.
We will be delighted to help plan a divine getaway to one of our Bali retreats for you.
</p>
    </div> <br /><br />
    <div className='w-full text-center space-x-3'>
    <NavLink to='/'><button className='text-2xl font-semibold bg-rose-300 px-4 py-2 rounded-lg'>Home</button></NavLink>
    <NavLink to='/contact'><button className='text-2xl font-semibold bg-green-400 px-4 py-2 rounded-lg'>Contact us</button></NavLink>
    </div> <br /> <br /><br /><br />

    </div>
  )
}

export default Offer