import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Scart from '../Scart/Scart';

const AppliedJob = () => {
    
    const idd=JSON.parse(localStorage.getItem('id'))

    console.log(idd);

    return (
        <div>
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