import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const MainHome = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
       <div>
         <div className='bg-[#f9f9ff] flex pl-[100px] pr-[100px] pt-[50px] space-x-8 '>
        <div className='md:w-[1050px] ' >
            <h3 className='leading-[85px] font-extrabold text-[75px] text-[##1A1919]'>One Step Closer To Your <br /><span className='font-extrabold text-transparent text-[80px] bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Dream Job</span></h3>
            <p className='mt-6 font-medium text-lg text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="mt-[32px] bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 text-white font-bold rounded-lg hover:bg-slate-400">Get Started</button>

        </div>
        <div className='ml-[500px]'><img className='w-[1000px]' src='https://i.ibb.co/NCL2JMr/P3-OLGJ1-copy-1.png' alt="" /></div>
        
        </div>

        <div className='bg-white'>
        
       <div className='text-center pt-[80px]'>
       <h1 className='text-5xl font-extrabold text-[#1a1919]'>Job Category List</h1>
        <p className='mt-5 font-medium text-base text-center text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        
       </div>

       <div className='singleCart mt-8 gap-10'>
        {
           data.map(singleData=><Cart 
           key={singleData.id}
           singleData={singleData}
         ></Cart>)
        }
       </div>
        </div>

        <div>
        <div className='text-center pt-[80px]'>
       <h1 className='text-5xl font-extrabold text-[#1a1919]'>Featured Jobs</h1>
        <p className='mt-5 font-medium text-base text-center text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        
       </div>



        </div>
       </div>
    );
};
// bg-gradient-to-r from-[#7E90FE] to-[#9873FF]
export default MainHome;