import React from 'react'
import { Link } from 'react-router-dom'

const Content = ({imgRight, isButton, imageUrl, title, description }) => {
    if (imgRight) {
        return(
            <>
                <div className="flex flex-col md:flex-row items-center px-20">
                    <div className="md:w-1/2 p-5">
                        <h2 className="text-2xl font-bold mb-4">{title}</h2>
                        <p className="text-lg text-gray-700">{description}</p>
                    </div>
                    <div className="md:w-1/2">
                        <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
                    </div>
                </div>
            </>
        )
    } else {
        return(
            <>
                <div className="flex flex-col md:flex-row justify-evenly items-center gap-20 px-20 mb-28">
                    <div className="md:w-1/2">
                        <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
                    </div>
                    <div className="md:w-1/2 h-full flex flex-col justify-evenly gap-10 text-center p-5">
                        <h2 className="text-3xl">{title}</h2>
                        <p className="text-md text-gray-700" >{description}</p>
                        <div className='flex justify-center align-middle'>
                            {isButton && (
                            <button className='border border-black py-2 px-4 rounded-md font-semibold w-30 hover:bg-gray-100'>Shop Now</button>
                            )}
                        </div>
                    </div>
                    
                </div>
            </>
        );
    }
};

export default Content;
