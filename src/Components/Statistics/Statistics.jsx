import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; 
const data = [ 
    { "id": 1, "name": "New Year", "marks": 58 },
 { "id": 2, "name": "G3 Architects", "marks": 60 },
  { "id": 3, "name": "Justice", "marks": 60 },
   { "id": 4, "name": "Problem Solve", "marks": 59 }, 
   { "id": 5, "name": "Geometry Genius", "marks": 60 },
    { "id": 6, "name": "Ai Universe", "marks": 60 }, 
    { "id": 7, "name": "Quiz hero", "marks": 60 }, 
    { "id": 8, "name": "Knowledge cafe", "marks": 60 } 
]

const Statistics = () => {
    return (<>
    <h1 className='underline flex justify-center text-3xl font-extrabold mb-10 mt-5'>Assignment Mark</h1>
        <div className='flex justify-center '>
           
            <AreaChart
          width={1000}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
         
          <XAxis dataKey="name" />
          
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
    
         </AreaChart>
        </div>
        </>
    );
};

export default Statistics;