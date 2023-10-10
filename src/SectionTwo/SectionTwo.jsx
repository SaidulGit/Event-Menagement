import React from 'react'

const SectionTwo = () => {
  return (
    <div className='m-5 p-5 bg-slate-500 space-y-5 text-white'>
        <h2 className='text-center text-4xl p-5 font-bold'>Say Yes To A New, Healthier You</h2>
        <div className='flex justify-evenly'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IYSkQLXbtHE?si=QQQ6FBsQP8i6zlz9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <ul>
                <li>World-class fitness programs led by expert trainers and coaches</li> <br />
                <li>Delicious, customized meals made fresh, tailored to your fitness goals</li><br />
                <li>Unforgettable scenic sights and views</li><br />
                <li>Friendly hosts that’ll make you feel at home and answer your questions</li><br />
                <li>Fair, flexible pricing plans</li><br />
                <li>Friendly support before, during, and after your retreat</li>
            </ul>
        </div>
    </div>
  )
}

export default SectionTwo