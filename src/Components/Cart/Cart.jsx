import React from 'react';
import './Cart.css'
const Cart = ({singleData}) => {
    const {id,img,title,jobAvailable}=singleData
    return (
        <div className='w-[300px]  rounded-lg p-4 bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]'>
            <img className='p-5 w-[70] h-[70] mt-[40px] mr-[40px] mb-[30px] bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A]' src={img} alt="" />
            <div>
                <h4 className='font-extrabold text-xl text-[#474747]'>{title}</h4>
                <p className='font-medium text-sm text-[#a3a3a3] mt-2'>{jobAvailable}</p>
            </div>
        </div>
    );
};

export default Cart;