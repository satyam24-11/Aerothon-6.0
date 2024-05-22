import React from 'react'


const Footer = () => {
  return (
    <footer className='flex justify-between bg-gray-900 text-white py-4 text-sm px-4'>
        <div className="logo flex items-center justify-evenly">
          <img className='ml-5 w-7 h-7 invert mr-2' src="src/assets/aeroplane.svg" alt="" />
            <span className='font-bold text-white mr-8'>Air NAvigation</span>
        </div>
        <div>
            <ul className='flex gap-4 '>
                <a className='hover:underline' href="">Terms of Services</a>
                <a className='hover:underline'href="">Privacy Policy</a>
                <a className='hover:underline'href=""> Contact Us</a>
            </ul>
        </div>
        <div>© 2024 FlightTrack. All rights reserved.</div>
      
    </footer>
  )
}

export default Footer
