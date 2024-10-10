import React, { useState, useEffect } from 'react';
import Banner from '../Layout/Banner';
import { Link } from 'react-router-dom';
import { TbWorld } from "react-icons/tb";
import { BsSuitHeart } from "react-icons/bs";
import { FaRegUser} from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";


function Header() {
    const userName = "John";
    const [isScrolled, setIsScrolled] = useState(false);

   
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 28); 
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
        <Banner/>
        <div className={`${isScrolled ? 'fixed w-full top-0 z-10' : 'top-0'} transition-all duration-300`}>
            <header className="flex items-center justify-between p-4 shadow-md px-10 bg-white">
                <nav>
                    <ul className="flex space-x-4 text-black">
                        <li><Link to="/" className="active hover:underline">Womanswear</Link></li>
                        <li><Link to="/about" className=" hover:underline">Menswear</Link></li>
                        <li><Link to="/contact" className=" hover:underline">Kidswear</Link></li>
                    </ul>
                </nav>
                
                <h1 className="helv text-4xl font-bold">FARFETCH</h1>

                <div className="flex items-center space-x-4">
                    <TbWorld className="text-2xl" />
                    
                    <div className="flex items-center space-x-2">
                        <FaRegUser className="text-2xl" />
                        <span>{userName}</span> 
                    </div>

                    <h2 className="text-lg text-amber-700">Bronze</h2> 

                    <BsSuitHeart className="text-xl font-bold text-black"/>
                    <RiShoppingBagLine className="text-xl" />
                </div>
            </header>
            <div className="bg-white py-2 shadow-sm">
                <div className="px-10 flex items-center justify-between">
                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link to="/new" className="text-gray-600 hover:text-blue-500">New in</Link></li>
                            <li><Link to="/brands" className="text-gray-600 hover:text-blue-500">Brands</Link></li>
                            <li><Link to="/clothing" className="text-gray-600 hover:text-blue-500">Clothing</Link></li>
                            <li><Link to="/shoes" className="text-gray-600 hover:text-blue-500">Shoes</Link></li>
                            <li><Link to="/bags" className="text-gray-600 hover:text-blue-500">Bags</Link></li>
                            <li><Link to="/accessories" className="text-gray-600 hover:text-blue-500">Accessories</Link></li>
                            <li><Link to="/jewelry" className="text-gray-600 hover:text-blue-500">Jewelry</Link></li>
                            <li><Link to="/homeware" className="text-gray-600 hover:text-blue-500">Homeware</Link></li>
                            <li><Link to="/pre-owned" className="text-gray-600 hover:text-blue-500">Pre-owned</Link></li>
                            <li><Link to="/sale" className="text-red-600 hover:text-blue-500">Sale</Link></li>
                        </ul>
                    </nav>
                    <div className="flex items-center border border-black rounded-md overflow-hidden">
                        <FiSearch className="text-gray-600 ml-2 text-2xl"/> 
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="border-none py-2 px-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;
