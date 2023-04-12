import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Scart from '../Scart/Scart';

const AppliedJob = () => {
    
    const idd=JSON.parse(localStorage.getItem('id'))

    console.log(idd);

    return (
        <div>
             <div className='mt-10 flex justify-end mr-[100px] '>
     <button className="mr-4 mt bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 text-white font-bold rounded-lg hover:bg-slate-400">Remote</button>
      <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 text-white font-bold rounded-lg hover:bg-slate-400">Full Time</button>
     </div>
            {
                idd.map(data=><Scart 
                key={data.id}
                jobData={data}
                ></Scart>)
            }
        </div>
    );
};

export default AppliedJob;