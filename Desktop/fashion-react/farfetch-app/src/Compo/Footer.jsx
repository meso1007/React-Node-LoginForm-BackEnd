import React from 'react';
import { FaInstagram, FaFacebook, FaPinterestP, FaTwitter, FaSnapchatGhost, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-gray-800 p-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                <div>
    <h2 className="font-bold mb-4">Customer Service</h2>
    <ul className='space-y-2'>
        <li><a href="#" className="hover:underline">Contact us</a></li>
        <li><a href="#" className="hover:underline">FAQs</a></li>
        <li><a href="#" className="hover:underline">Orders and delivery</a></li>
        <li><a href="#" className="hover:underline">Returns and refunds</a></li>
        <li><a href="#" className="hover:underline">Payment and pricing</a></li>
        <li><a href="#" className="hover:underline">Cryptocurrency payments</a></li>
        <li><a href="#" className="hover:underline">Promotion terms and conditions</a></li>
        <li><a href="#" className="hover:underline">FARFETCH Customer Promise</a></li>
    </ul>
            </div>

            {/* About FARFETCH */}
            <div>
                <h2 className="font-bold mb-4">About FARFETCH</h2>
                <ul className="space-y-2"> {/* ここで間隔を設定 */}
                    <li><a href="#" className="hover:underline">About us</a></li>
                    <li><a href="#" className="hover:underline">FARFETCH partner boutiques</a></li>
                    <li><a href="#" className="hover:underline">Careers</a></li>
                    <li><a href="#" className="hover:underline">FARFETCH app</a></li>
                    <li><a href="#" className="hover:underline">Modern slavery statement</a></li>
                    <li><a href="#" className="hover:underline"></a></li>
                </ul>
            </div>

            {/* Affiliate Program */}
            <div>
                <h2 className="font-bold mb-4">Discounts and membership</h2>
                <ul className="space-y-2"> {/* ここで間隔を設定 */}
                    <li><a href="#" className="hover:underline">Affiliate Program</a></li>
                    <li><a href="#" className="hover:underline">FARFETCH membership</a></li>
                    <li><a href="#" className="hover:underline">Student discount UNiDAYS</a></li>
                    <li><a href="#" className="hover:underline">Student Beans and Graduates</a></li>
                    <li><a href="#" className="hover:underline">Student and Youth discount</a></li>
                    <li><a href="#" className="hover:underline">Essential worker discount</a></li>
                    <li><a href="#" className="hover:underline">Donate and save</a></li>
                </ul>

                <div className='mt-5'>
            <h2 className="font-bold">Follow us</h2>
            <ul className="flex flex-row gap-2 pl-3 mt-3 mb-6">
                <li>
                    <a href="#" className="flex items-center group">
                        <span className="relative rounded-md p-3 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:bg-white">
                            <FaInstagram className="text-xl transition duration-300 ease-in-out " />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center group">
                        <span className="relative rounded-md p-3 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:bg-white">
                            <FaFacebook className="text-xl transition duration-300 ease-in-out " />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center group">
                        <span className="relative rounded-md p-3 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:bg-white">
                            <FaPinterestP className="text-xl transition duration-300 ease-in-out" />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center group">
                        <span className="relative rounded-md p-3 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:bg-white">
                            <FaTwitter className="text-xl transition duration-300 ease-in-out" />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center group">
                        <span className="relative rounded-md p-3 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:bg-white">
                            <FaSnapchatGhost className="text-xl transition duration-300 ease-in-out " />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center group">
                        <span className="relative rounded-md p-3 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:bg-white">
                            <FaYoutube className="text-xl transition duration-300 ease-in-out" />
                        </span>
                    </a>
                </li>
            </ul>
        </div>
                    </div>                   
                </div>
                <div className="pt-4 border-t  border-gray-100">
                    <ul className='flex flex-row gap-10 underline mb-5'>
                        <li><a href="#" className="hover:underline hover:text-gray-800 hover:text-shadow">Privacy policy</a></li>
                        <li><a href="#" className="hover:underline hover:text-gray-800 hover:text-shadow">Terms and conditions</a></li>
                        <li><a href="#" className="hover:underline hover:text-gray-800 hover:text-shadow">Accessibility</a></li>
                        <li><a href="#" className="hover:underline hover:text-gray-800 hover:text-shadow">Sitemap</a></li>
                    </ul>
                    <p className="text-sm">
                        'FARFETCH' and the 'FARFETCH' logo are trademarks of FARFETCH UK Limited and are registered in numerous jurisdictions around the world.
                    </p>
                    <p className="text-sm">
                        © Copyright 2024 FARFETCH UK Limited. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
