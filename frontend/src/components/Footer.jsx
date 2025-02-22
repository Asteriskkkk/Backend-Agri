import React, { useState } from 'react';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    <div className="w-full max-w-lg">
                        <img 
                            className="h-12 w-auto mx-auto" 
                            src={logo} 
                            alt="Logo" 
                        />
                        
                        <p className="mt-6 text-base text-gray-600 mx-auto max-w-md">
                            Empowering farmers with easy access to government schemes and financial support. Find, check eligibility, and apply—all in one place!
                        </p>
                    </div>

                    <hr className="w-full max-w-4xl my-12 border-gray-200" />

                    <p className="text-sm text-gray-600">
                        © Created with ❤️ by Amit, Pravin, Vaibhav, Durgesh
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
