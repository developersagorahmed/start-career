import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'


const Card = ({info}) => {
console.log(info);
   const {companyLogo,jobTitle,companyName,remoteOrOnsite,fullTimeOrPartTime,location,salary}=info
    return (
        <div className=' pt-[40px] w-[600px] h-full pl-[40px] border-2 border-[#e8e8e8] rounded-lg mt-[32px]' >
            <img className='w-[250px] h-[90px]' src={companyLogo} alt="" />
            <h3 className='text-left font-extrabold text-2xl text-[#474747] mt-[37px]'>{jobTitle}</h3>
            <p className='text-left font-semibold text-xl text-[#757575] mt-3'>{companyName}</p>
            <div className='flex mt-4 '>
                <button className='w-[95px] h-[40px] px-[19px] py[9px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-2 rounded-md border-[#9873FF]'>{remoteOrOnsite}</button>
                <button className='ml-6 w-[115px] h-[40px] px-[19px] py[9px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-2 rounded-md border-[#9873FF]'>{fullTimeOrPartTime}</button>
                
            </div>

            <div className='mt-[16px] flex '>
                <p className='text-left'><FontAwesomeIcon className='w-[24px] h-[24px]' icon={faLocationDot} /><span className='ml-[7px] font-semibold text-xl text-[#757575]'>{location}</span></p>
                <p className='text-left ml-6'><FontAwesomeIcon className='w-[24px] h-[24px]' icon={faCircleDollarToSlot} /><span className='ml-[10px] font-semibold text-xl text-[#757575]'>Salary: {salary}</span></p>
                
            </div>
            <button className="mt-6 mb-[40px] text-left bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 text-white font-bold rounded-lg hover:bg-slate-400">View Details</button>
        </div>

        
        );
};


export default Card;