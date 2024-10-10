import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import React, { useState } from 'react';

function ProductCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoverHeart, setIsHoverHeart] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);

    const handleHeartClick = () => {
        setIsFavorited(!isFavorited);
    };


    return (
        <div 
            className="h-80 transition-all duration-200 w-10/12 cursor-pointer ml-7" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-96 overflow-hidden flex items-center justify-center">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'} mx-auto`} 
                />
                <img 
                    src={product.hoverImage} 
                    alt={product.name} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} mx-auto`} 
                />
                <div 
                    className="absolute top-3 right-3 text-xl cursor-pointer" 
                    onClick={handleHeartClick}
                    onMouseEnter={() => setIsHoverHeart(true)}
                    onMouseLeave={() => setIsHoverHeart(false)}
                >
                    {isFavorited || isHoverHeart ? <BsSuitHeartFill /> : <BsSuitHeart />} 
                </div>
            </div>

            <div className="mt-4 mb-8 flex flex-col">
                <h2 className={product.isNewSeason ? "text-gray-500" : "hidden"}>New Season</h2>
                <h2 className={product.isNewSeason ? "hidden": "empty-space"}></h2>
                <h2 className="text-lg font-bold text-left">{product.brand}</h2> 
                <p className="text-sm text-gray-800 ">{product.name}</p> 
            </div>
            <p className="text-gray-800">{product.price}</p>
        </div>
    );
}

export default ProductCard;
