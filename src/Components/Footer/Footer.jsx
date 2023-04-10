import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
       <div className=' bg-black'>
         <div className='flex px-9 mt-[100px] bg-black pt-[100px]'>
            <div className='w-[300px]'>
                <h2 className='mt-5 font-extrabold text-3xl text-white'>Start Carrier</h2>
                <p className='mt-5 w-[300px] font-normal text-base text-white'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <img className='mt-5 pb-12' src="https://i.ibb.co/jZVR5PK/Group-9969.png" alt="" />
            </div>
            <div className=' ml-[100px] mt-5 grid grid-cols-4 gap-16'>
            <div className='content-between	 w-[100px]'>
                <h2 className='font-semibold text-3xl text-white'>Company</h2>
                <p className='font-normal text-base text-white'>About Us</p>
                <p className='font-normal text-base text-white'>Work</p>
                <p className='font-normal text-base text-white'>Latest News</p>
                <p className='font-normal text-base text-white'>Careers</p>
            </div>
            <div>
                <h2  className='font-semibold text-3xl text-white'>Product</h2>
                <p className='font-normal text-base text-white'>Prototype</p>
                <p className='font-normal text-base text-white'>Plans & Pricing</p>
                <p className='font-normal text-base text-white'>Customers</p>
                <p className='font-normal text-base text-white'>Integrations</p>
            </div>
            <div>
                <h2 className='font-semibold text-3xl text-white'>Support</h2>
                <p className='font-normal text-base text-white'>Help Desk</p>
                <p className='font-normal text-base text-white'>Sales</p>
                <p className='font-normal text-base text-white'>Become a Partner</p>
                <p className='font-normal text-base text-white'>Developers</p>
            </div>
            <div>
                <h2 className='font-semibold text-3xl text-white'>Contact</h2>
                <p className='font-normal text-base text-white'>524 Broadway , NYC</p>
                <p className='font-normal text-base text-white'>+1 777 - 978 - 5570</p>
              
            </div>
            </div>
            
            

        </div>
        <div className='footerSection'>
            <p className='pt-[50px] pb-[100px] font-semibold text-sm text-white'>@2023 CareerHub. All Rights Reserved</p>
            <p className='pt-[50px] pb-[100px] font-semibold text-sm text-white'>Powered by <span className='font-bold'>Start Carrier</span></p>
        </div>
       </div>
        
    );
};

export default Footer;