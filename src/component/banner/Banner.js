import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        "https://t4.ftcdn.net/jpg/06/88/66/31/360_F_688663136_CYDZXf10utvUG7QScsByISc5AaEDf68F.jpg",
        "https://t4.ftcdn.net/jpg/06/88/66/31/360_F_688663136_CYDZXf10utvUG7QScsByISc5AaEDf68F.jpg",
        "https://static.vecteezy.com/system/resources/previews/026/853/878/large_2x/world-book-day-design-of-a-collection-of-stack-of-books-for-banner-background-ai-generative-photo.jpg",
        "https://t4.ftcdn.net/jpg/05/44/54/69/360_F_544546950_Xi80k2ppry7rqKQQYsSNVmuaAILUiki9.jpg",
        "https://t4.ftcdn.net/jpg/07/64/23/43/360_F_764234350_QUDgtPXyvJsCuJr2bZpSNfCKtYYtlrVj.jpg",
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div>
            <div id="animation-carousel" className="relative w-full" data-carousel="static">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute block w-full transition-opacity duration-200 ease-linear ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        >
                            <img src={slide} className="block w-full" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={handlePrev}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-black bg-transparent dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={handleNext}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-black bg-transparent dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Banner;
