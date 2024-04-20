'use client'
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopProd from '../components/topProd';
import DataChart from '../components/lineCart';
import NavBar from '../components/NavBar'
import {faMoneyBill,faChartSimple,faPercent,faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
const Dashboard= () => {
    return (
       <>
       <NavBar>
        <h1 className='font-normal text-start text-3xl'>Dashboard</h1>
        <p className='font-normal text-start ml-2 text-medium'>welcome to your dashboard</p>
        <div className='sm:inline lg:flex justify-start'>
        
        <div className='grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4 w-full md:w-3/4 lg:w-1/2 pt-5'> 

          <div className='md:w-68  h-32 bg-black/20 rounded-2xl hover:scale-95'>
            <div className="text-lg text-gray-500 pl-4 pt-4">total revenue</div>
            <div className="relative w-auto  flex justify-end pr-3">
              <div className="text-white p-4 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"><FontAwesomeIcon icon={faChartSimple} /></div>
            </div>
            <div className="text-2xl text-gray-100 font-medium leading-8 pl-4">200$</div>
          </div>

        <div className='md:w-68  h-32 bg-black/20 rounded-2xl hover:scale-95'>
        <div className="text-lg text-gray-500 pl-4 pt-4">total customers</div>
            <div className="relative w-auto  flex justify-end pr-3">
              <div className="text-white p-4 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500"><FontAwesomeIcon icon={faPeopleGroup} /></div>
            </div>
            <div className="text-2xl text-gray-100 font-medium leading-8 pl-4">3340</div>
        </div>
        <div className='md:w-68  h-32 bg-black/20 rounded-2xl hover:scale-95'>
        <div className="text-lg text-gray-500 pl-4 pt-4">visitors made a purchase</div>
            <div className="relative w-auto  flex justify-end pr-3">
              <div className="text-white p-4 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-400"><FontAwesomeIcon icon={faMoneyBill} /></div>
            </div>
            <div className="text-2xl text-gray-100 font-medium leading-8 pl-4">450/1000</div>
        </div>
        <div className='md:w-68  h-32 bg-black/20 rounded-2xl hover:scale-95' >
        <div className="text-lg text-gray-500 pl-4 pt-4">performance</div>
            <div className="relative w-auto  flex justify-end pr-3">
              <div className="text-white p-4 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-400"><FontAwesomeIcon icon={faPercent} /></div>
            </div>
            <div className="text-2xl text-gray-100 font-medium leading-8 pl-4">20%</div>
        </div>
        </div>
        <div className='sm:w-full lg:w-1/2 ml-3'><DataChart/></div>
        </div>
        <div className='w-full pt-0 mt-4'><TopProd/></div>
        </NavBar>
    </>
    );
  };
  
  export default Dashboard;
  