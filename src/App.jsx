//import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
//import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      {/* section-------------1 */}
      <div className='section-1 flex bg-white h-[60%]' >
        <div className="left mt-6 ml-6 w-full h-full p-4">
          <div className='ml-20 mt-20'>
            <h1 className=' font-mono text-black text-5xl my-4 w-3/4'>Comprehensive Flight Tracking and Route Planning</h1>
            <p className='font-medium text-xl text-gray-800 my-4 w-3/4'>Optimize your flights with real-time data, weather insights, and risk mitigation tools</p>
            <ul className='flex gap-4 text-white text-sm'>
              <li className='cursor-pointer bg-black p-2 border rounded-xl hover:text-white hover:bg-gray-500  transition-all'>Get Started</li>
              <li className='cursor-pointer bg-black p-2 border rounded-xl hover:text-black hover:bg-gray-50 hover:border border-black transition-all'>Learn More</li>
            </ul>
          </div>
        </div>
        <div className="right mt-6 ml-6 w-[65%] pt-20 pr-20">
          <img className='  w-[85%] h-[60%] shadow-lg shadow-black rounded-xl' src="https://generated.vusercontent.net/placeholder.svg" alt="" />
        </div>
      </div>
      {/* section----------2 */}
      <div className='section-2 bg-[#111827] text-gray-300'>
        <div className="p-16 pb-0  hero flex">
          <div className="left w-[55%]">
            <h1 className='text-5xl font-mono'>Optimize Your Flights with Advanced Features</h1>
            <p className='text-lg font-thin text-gray-400'>Leverage our comprehensive tools to plan the most efficient and safe routes for your flights.</p>

            <div className="grid mt-10 grid-cols-2  w-fit">
              <div className="card flex flex-col gap-2 w-[80%] p-4">
                <img className='h-10 w-10' src="src\assets\map.svg" alt="" />
                <h1 className='text-xl'>Real-time Tracking</h1>
                <p className='text-lg text-gray-500'>Monitor your flights in real-time on an interactive map.</p>
              </div>

              <div className="card flex flex-col gap-2 w-[80%] p-4">
                <img className='filter invert h-10 w-10' src="src\assets\compass.svg" alt="" />
                <h1 className='text-xl'>Route Planning</h1>
                <p className='text-lg text-gray-500'>Plan optimal routes considering weather, airspace, and other factors.</p>
              </div>
              <div className="card flex flex-col gap-2 w-[80%] p-4">
                <img className='filter invert h-10 w-10' src="src\assets\secure.svg" alt="" />
                <h1 className='text-xl'>Risk Mitigation</h1>
                <p className='text-lg text-gray-500'>Identify and address potential challenges along your flight path.</p>
              </div>

              <div className="card flex flex-col gap-2 w-[80%] p-4">
                <img className='filter invert h-10 w-10' src="src\assets\bell.svg" alt="" />
                <h1 className='text-xl'>Alerts and Notifications</h1>
                <p className='text-lg text-gray-500'>Stay informed with customizable alerts and notifications.</p>
              </div>
            </div>
          </div>
          <div className="right w-[45%] p-20">
            <img className='w-[100%] h-[70%] shadow-lg shadow-black rounded-xl' src="https://generated.vusercontent.net/placeholder.svg" alt="" />
          </div>
        </div>
      </div>
      {/* section----------3 */}
      <div className="section-3 bg-[#ebedf2b7] flex mt-10 mb-10 gap-8">
        <div className="left ml-20 ">
          <h1 className='font-semibold text-4xl font-mono w-[80%]'>Flight Dashboard</h1>
          <div className="grid grid-cols-3 justify-around mt-4 text-black bg-white p-4 border-gray-500 border rounded-xl ">
            <div className="card bg-gray-400 p-4 w-2/3 rounded-xl ml-4">
              <h1 className='font-semibold mb-2'>Weather</h1>
              <ul className='flex flex-col gap-2' >
                <li className='flex gap-2'>
                  <img src="src\assets\cloud.svg" alt="" />
                  <li>Partly Cloudy</li>
                </li>
                <li className='flex gap-2'>
                  <img src="src\assets\temp.svg" alt="" />
                  <li>20°C</li>
                </li>
                <li className='flex gap-2'>
                  <img src="src\assets\wind.svg" alt="" />
                  <li>10km/h</li>
                </li>
              </ul>
            </div>
            <div className="card bg-gray-400 p-4 w-2/3 rounded-xl ml-4">
              <h1 className='font-semibold mb-2'>Environmental</h1>
              <ul className='flex flex-col gap-2' >
                <li className='flex gap-2'>
                  <img src="src\assets\leaf.svg" alt="" />
                  <li>Low Emissions Moderate</li>
                </li>
                <li className='flex gap-2'>
                  <img src="src\assets\net.svg" alt="" />
                  <li>Noise Normal</li>
                </li>
                <li className='flex gap-2'>
                  <img src="src\assets\radiation.svg" alt="" />
                  <li>Radiation</li>
                </li>
              </ul>
            </div>
            <div className="card bg-gray-400 p-4 w-2/3 rounded-xl ml-4">
              <h1 className='font-semibold mb-2'>System Status</h1>
              <ul className='flex flex-col gap-2' >
                <li className='flex gap-2'>
                  <img src="src\assets\online.svg" alt="" />
                  <li>Online</li>
                </li>
                <li className='flex gap-2'>
                  <img src="src\assets\GPS.svg" alt="" />
                  GPS Connected</li>
                <li className='flex gap-2'>
                  <img src="src\assets\data.svg" alt="" />
                  <li> Data Synced</li>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right w-1/2">
          <h1 className='font-mono text-5xl mb-4'>Visualize and Analyze Your Flight Data</h1>
          <p className='text-xl text-gray-600 mb-4'>Our interactive map and comprehensive data analysis tools provide you with the insights you need to make informed decisions.</p>
          <div className="grid grid-cols-2 bg-wh">
            <div className="card p-4 w-[75%] mt-4 border bg-white border-gray-400 rounded-lg">
              <h1 className='text-xl font-mono font-semibold'>Flight Tracking</h1>
              <p className='text-sm text-gray-600'>Monitor your flights in real-time on an interactive map.</p>
              <img src="src\assets\square.png" alt="" />
            </div>
            <div className="card p-4 w-[75%] mt-4 border bg-white border-gray-400 rounded-lg">
              <h1 className='text-xl font-mono font-semibold'>Route Analysis</h1>
              <p className='text-sm text-gray-600'>Optimize your routes based on weather, airspace, and other factors.</p>
              <img src="src\assets\square.png" alt="" />
            </div>
            <div className="card p-4 w-[75%] mt-4 border bg-white border-gray-400 rounded-lg">
              <h1 className='text-xl font-mono font-semibold'>Risk Assessment</h1>
              <p className='text-sm text-gray-600'>Identify and mitigate potential challenges along your flight path.</p>
              <img src="src\assets\square.png" alt="" />
            </div>
            <div className="card p-4 w-[75%] mt-4 border border-gray-400 rounded-lg">
              <h1 className='text-xl font-mono font-semibold'>Reporting and Analytics</h1>
              <p className='text-sm text-gray-600'>Generate comprehensive reports and insights to support your decision-making.</p>
              <img src="src\assets\square.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
