import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

const Hero = () => {        
    const {t} = useTranslation();
    console.log(t("main"));
    const heroTag = t("main");
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        {
            url: "https://www.geopoll.com/wp-content/uploads/2020/06/farmers-on-mobile-phone_small.jpg",
            alt: "Farmer using mobile phone"
        },
        {
            url: "https://nextbillion.net/wp-content/uploads/indian-farmer-using-mobile-phone-at-corn-field-139751932-copy.jpg", 
            alt: "Farmer in field"
        },
        {
            url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            alt: "Agricultural technology"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative bg-gradient-to-b from-gray-50 to-white">
            <section className="relative py-16 sm:py-20 lg:pt-24 lg:pb-40">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 gap-y-12 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
                        <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                            <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj animate-fade-in">
                                    {t("hero_title")}
                                </h1>

                                <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                                    Easily search, filter, and apply for farming subsidies, loans, and grants.
                                </p>

                                <div className="mt-10 lg:mt-14">
                                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                                        <a
                                            href="/search"
                                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-green-600 border border-transparent rounded-xl hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                                            role="button"
                                        >
                                            Find Schemes Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="xl:col-span-3 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl transform -rotate-2"></div>
                            <div className="relative overflow-hidden rounded-2xl" style={{height: "400px"}}>
                                {images.map((image, index) => (
                                    <img 
                                        key={index}
                                        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                                            index === currentImage ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        src={image.url}
                                        alt={image.alt}
                                    />
                                ))}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                                index === currentImage ? 'bg-white' : 'bg-white/50'
                                            }`}
                                            onClick={() => setCurrentImage(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;