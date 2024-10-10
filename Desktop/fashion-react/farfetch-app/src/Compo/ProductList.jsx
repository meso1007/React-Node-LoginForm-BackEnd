import React, { useState, useEffect } from 'react';
import ProductCard from '../Layout/ProductCard';

function ProductList({ title, products }) {
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
            <div className={`min-h-screen transition-all duration-300 ${isScrolled ? 'mt-10' : 'mt-6'}`}>
                <div className='flex flex-row justify-between items-center p-9 mr-10 pt-11'>
                    <h2 className='text-2xl px-10'>{title}</h2>
                    <button className='border border-gray-900 text-gray-900 bg-white hover:bg-gray-100 px-4 py-0.5 rounded-lg transition font-semibold duration-200'>
                        Shop now
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 px-12">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductList;
