import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppliedJob = () => {
    
    const idd=JSON.parse(localStorage.getItem('id'))

    console.log(idd);

    return (
        <div>
            {
                idd.map(data=>console.log(data))
            }
        </div>
    );
};

export default AppliedJob;