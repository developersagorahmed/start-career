import React from 'react';
import { Link } from 'react-router-dom';

const Scart = ({jobData}) => {
    console.log(jobData);
    
    return (
        <div className='mt-[70px]'>

    <div className='flex p-4 items-center	 place-content-between mb-4 mx-auto w-[1100px] h-[250px] border-2 rounded-lg'>
        <img className='flex  justify-center w-[240px] h-[200px] rounded-lg bg-[#f4f4f4]' src={jobData.remoteOrOnsite} alt="" />
        <div>
            <h2>{jobData.companyName}</h2>
            <p>{jobData.fullTimeOrPartTime}</p>
            <div>
                <button>{jobData.jobResponsibility}</button>
                <button>{jobData.educationalRequirements}</button>
            </div>
            <div>
                <p>{jobData.companyLogo}</p>
                <p>{jobData.jobDescription}</p>
            </div>
        </div>
        <Link to={`/job/${jobData.id}`}><button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 text-white font-bold rounded-lg hover:bg-slate-400">View Details</button></Link>
    </div>
    
        </div>
    );
};

export default Scart;