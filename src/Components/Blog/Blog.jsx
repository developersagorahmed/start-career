import React from 'react';

const Blog = () => {
    return (
        <div className='mx-16 mt-8 grid grid-cols-2 gap-5'>
            <div className='w-[550px] p-8 bg-slate-400 rounded-lg'>
                <h1 className='text-center text-2xl mb-7 font-extrabold '>when you should use context api?</h1>
                <p className='text-center text-lg font-semibold '>The React Context API is a powerful feature that allows you to manage global state in your application. It can be used when you need to share data or state across multiple components in your application without having to pass down props through every level of the component tree.</p>
            </div>
            <div className='w-[550px] p-8 bg-slate-400 rounded-lg'>
                <h1 className='text-center text-2xl mb-7 font-extrabold'>what is custom hook?</h1>
                <p className='text-center text-lg font-semibold '>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature.</p>
            </div>
            <div className='w-[550px] p-8 bg-slate-400 rounded-lg'>
                <h1 className='text-center text-2xl mb-7 font-extrabold'>What is the purpose of useRef ?</h1>
                <p className='text-center text-lg font-semibold '>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
            <div className='w-[550px] p-8 bg-slate-400 rounded-lg'>
                <h1 className='text-center text-2xl mb-7 font-extrabold'>What is the purpose of useMemo ?</h1>
                <p className='text-center text-lg font-semibold '>useMemo is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
            </div>
        </div>
    );
};

export default Blog;