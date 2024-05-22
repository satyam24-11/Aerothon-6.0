import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-black text-white py-2 '>
        <div className="logo flex items-center">
          <img className='ml-5 w-7 h-7 invert mr-2' src="src/assets/aeroplane.svg" alt="" />
            <span className='font-bold text-white text-2xl mr-8'>Air Navigation</span>
            <div className='flex gap-6 ml-10 text-md'>
            <a href="#" className='hover:underline transition-all'>Flights</a>
            <a href="#" className='hover:underline transition-all'>Routes</a>
            <a href="#" className='hover:underline transition-all'>Weathers</a>
            <a href="#" className='hover:underline transition-all'>Alerts</a>
            <a href="#" className='hover:underline transition-all'>Analytics</a>
            </div>
        </div>
      {/* <ul className='flex gap-4 mx-9 text-white text-lg font-bold'>
        <li className='cursor-pointer bg-black p-2 border rounded-xl hover:bg-white hover:text-black transition-all'>Sign in</li>
        <li className='cursor-pointer bg-black p-2 border rounded-xl hover:bg-white hover:text-black transition-all'>Sign up</li>
      </ul> */}
    </nav>
  )
}

export default Navbar
