import React, { useState } from 'react';

function DownloadApp() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // ここでメール送信処理やバリデーションを行う
        alert(`An email has been sent to ${email} with the download link.`);
    };

    return (
        <div className="flex gap-10 mt-10 px-4 sm:px-8 lg:px-14 py-10 ">
            <div className=''>
                <h2 className="text-3xl font-bold mb-3 helv">DOWNLOAD THE FARFETCH APP</h2>
                <div className="w-full">
                    <p className="text-gray-700 leading-tight">
                        Enjoy exclusive content on our app, including personalized product edits as well as our Visual Search tool for iOS.
                        <span> </span>
                        <a href="#" className="text-gray-700 underline hover:text-gray-500">More about the app</a>
                    </p>

                </div>
            </div>
            <div className='w-full flex gap-10'>
                <div className="mb-8 w-3/4">
                    <h3 className="mb-4">EMAIL ME</h3>
                    <p className='mb-2'>Enter your email and we'll send you a link to download the free <br/> app</p>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={handleEmailChange}
                            className="px-4 py-2 w-9/12 border border-gray-300 rounded-md mx-w-sm focus:outline-none focus:border-blue-500"
                        />
                        <button 
                            type="submit" 
                            className="py-3 font-semibold w-1/6 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-200">
                            Send
                        </button>
                    </form>
                </div>

                <div className="w-px h-full bg-gray-300"></div>

                
                <div className="mb-8 w-1/6">
                    <h3 className="mb-4">SCAN QR CODE</h3>
                    <img 
                        src="./assets/qrcode-app.png" 
                        alt="QR Code for app download" 
                        className="w-52"
                    />
                </div>
            </div>
        </div>
    );
}

export default DownloadApp;
