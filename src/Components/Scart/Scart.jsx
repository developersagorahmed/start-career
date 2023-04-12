import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faCircleDollarToSlot} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Scart = ({jobData}) => {
    console.log(jobData);
    
    return (
        <div className='mt-[70px]'>
    

        <div className='flex p-4 items-center	 place-content-between mb-4 mx-auto w-[1100px] h-[250px] border-2 rounded-lg'>
         <div className='flex '>
         <img className='flex  mr-8 justify-center w-[240px] h-[200px] rounded-lg bg-[#f4f4f4]' src={jobData.remoteOrOnsite} alt="" />
            <div>
                <h2 className='mb-2 font-extrabold text-2xl text-[#474747]'>{jobData.companyName}</h2>
                <p className='mb-4 font-semibold text-xl text-[#757575]'>{jobData.fullTimeOrPartTime}</p>
                <div>
                <button className=' w-[120px] h-[40px] px-[19px] py[9px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-2 rounded-md border-[#9873FF]'>{jobData.jobResponsibility}</button>
                <button className='ml-4 w-[120px] h-[40px] px-[19px] py[9px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-2 rounded-md border-[#9873FF]'>{jobData.educationalRequirements}</button>
                    
                   
                    
                </div>
                <div className='flex mt-5'>
                    <p className='mr-6 font-semibold text-xl text-[#757575]'><FontAwesomeIcon className='mr-2' icon={faLocationDot}></FontAwesomeIcon>{jobData.companyLogo}</p>
                    <p className='font-semibold text-xl text-[#757575]'><FontAwesomeIcon className='mr-2' icon={faCircleDollarToSlot}></FontAwesomeIcon>{jobData.jobDescription}</p>
                </div>
            </div>
         </div>
            <Link to={`/job/${jobData.id}`}><button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 text-white font-bold rounded-lg hover:bg-slate-400">View Details</button></Link>
        </div>
        
            </div>
    );
};

export default Scart;