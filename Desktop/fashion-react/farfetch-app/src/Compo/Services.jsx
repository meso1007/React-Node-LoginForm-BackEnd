import React from 'react';
import { PiCoatHangerBold, PiQuestionBold } from "react-icons/pi";
import { BiMessage } from "react-icons/bi";


function Services() {
    return (
        <div className="px-4 sm:px-8 lg:px-20 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                <div className="p-8 px-6 border transition-all duration-300 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    <PiCoatHangerBold className='text-2xl mb-2'/>
                    <h3 className="text mb-2">HOW TO SHOP</h3>
                    <p className="">Your guide to shopping and placing orders</p>
                </div>
                <div className="p-8 px-6 border transition-all duration-300 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    <PiQuestionBold className='text-2xl mb-2'/>
                    <h3 className="text mb-2">FAQS</h3>
                    <p className="">Your questions answered</p>
                </div>
                <div className="p-8 px-6 border transition-all duration-300 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    <BiMessage className='text-2xl mb-2'/>
                    <h3 className="text mb-2">NEED HELP?</h3>
                    <p className="">Contact our global Customer Service team</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
