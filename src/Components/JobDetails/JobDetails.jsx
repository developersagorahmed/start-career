import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faCircleDollarToSlot,faCalendarDays,faPhone ,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { useLoaderData, useParams } from 'react-router-dom';

import './JobDetails.css'

const JobDetails = () => {
    const data=useLoaderData()
    const {id}=useParams()

    let mainData={};
    if(data){
        mainData=data.find(single=>single.id===parseInt(id))   
     }
    const {jobDescription,jobResponsibility,educationalRequirements,experiences,salary,jobTitle,phone,email,location}=mainData
     

    return (
        <div>
          <div className='bobDetails mt-[130px]'>
            <div className='w-[750px] '>
                <p className='mb-6'><span className='font-extrabold text-base '>Job Description: </span>{jobDescription}</p>
                <p className='mb-6'><span className='font-extrabold text-base '>Job Responsibility: </span>{jobResponsibility}</p>
                <h5 className='font-extrabold text-base mt-6 mb-4'>Educational Requirements: </h5>
                <p className='mb-6'>{educationalRequirements}</p>
                <h5 className='font-extrabold text-base  mb-4'>Experiences:</h5>
                <p>{experiences}</p>
                
            </div>
           <div>
           <div className='w-[450px] h-full pb-[60px] bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-lg p-4'>
                <h1 className='border-b-2 pb-4 border-slate-800 font-extrabold text-xl text-[#1a1919] pt-[30px] pl-[30px]'>Job Details</h1>
                <p className='text-[#757575] text-xl ml-2 mt-4'><FontAwesomeIcon className='mr-3' icon={faCircleDollarToSlot}></FontAwesomeIcon><span className='font-extrabold text-xl text-[#474747] mr-3'>Salary:</span>{salary} (Per Month)</p>
                <p className='text-[#757575] text-xl ml-2 mt-4'><FontAwesomeIcon className='mr-3' icon={faCalendarDays}></FontAwesomeIcon><span className='font-extrabold text-xl text-[#474747] mr-3'>Job Title:</span>{jobTitle}</p>
                <h1 className='border-b-2 pb-4 border-slate-800 font-extrabold text-xl text-[#1a1919] pt-[30px] pl-[30px]'>Contact Information</h1>
                <p className='text-[#757575] text-xl ml-2 mt-4'><FontAwesomeIcon className='mr-3' icon={faPhone}></FontAwesomeIcon><span className='font-extrabold text-xl text-[#474747] mr-3'>Phone:</span>{phone}</p>
                <p className='text-[#757575] text-xl ml-2 mt-4'><FontAwesomeIcon className='mr-3' icon={faEnvelope}></FontAwesomeIcon><span className='font-extrabold text-xl text-[#474747] mr-3'>Email:</span>{email}</p>
                <p className='text-[#757575] text-xl ml-2 mt-4'><FontAwesomeIcon className='mr-3' icon={faLocationDot}></FontAwesomeIcon><span className='font-extrabold text-xl text-[#474747] mr-3'>Address:</span>{location}</p>
            </div>
            <button className='mt-7 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-[450px] h-[65px] rounded-lg text-xl font-extrabold text-white'   >Apply Now</button>
           </div>
          </div>
          
        </div>
    );
};

export default JobDetails;