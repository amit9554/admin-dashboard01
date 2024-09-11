import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';

const HomePage = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [counts, setCounts] = useState({
        institutes: 0,
        doctors: 0,
        states: 0,
        patients: 0,
        appointments: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts((prevCounts) => ({
                institutes: Math.min(prevCounts.institutes + 1, 500),
                doctors: Math.min(prevCounts.doctors + 5, 10000),
                states: Math.min(prevCounts.states + 1, 50),
                patients: Math.min(prevCounts.patients + 10, 100000),
                appointments: Math.min(prevCounts.appointments + 20, 500000),
            }));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-sans">
            {/* Header */}
            <header className="bg-white shadow-md sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-gray-700">Logo</div>
                        <div className="hidden md:flex space-x-4">
                            <div className="relative group">
                                <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                                    Services <AiOutlineDown className="ml-1" />
                                </button>
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 1</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 2</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Service 3</a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Notice Section */}
            <div className="bg-blue-600 text-white py-2 relative overflow-hidden">
                <div className={`flex whitespace-nowrap ${isPaused ? '' : 'animate-marquee'}`}>
                    <span className="mx-4">Important Update: New features added to our platform!</span>
                    <span className="mx-4">COVID-19 Information: Stay safe and follow guidelines.</span>
                    <span className="mx-4">Upcoming Event: Annual Medical Conference on July 15th.</span>
                </div>
                <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 p-1 rounded-full"
                >
                    {isPaused ? <BsPlayFill /> : <BsPauseFill />}
                </button>
            </div>

            {/* Hero Section */}
            <div className="bg-gray-100 min-h-screen flex items-center">
                <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Healthcare professionals" className="rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105" />
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Healthcare Platform</h2>
                        <p className="text-xl text-gray-600 mb-8">Connecting patients with the best healthcare professionals.</p>
                        <form className="bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105" type="button">
                                    Sign In
                                </button>
                                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Counter Cards */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            { title: 'Total Institutes', count: counts.institutes },
                            { title: 'Total Doctors', count: counts.doctors },
                            { title: 'Total States', count: counts.states },
                            { title: 'Total Patients', count: counts.patients },
                            { title: 'Total Appointments', count: counts.appointments },
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-100 rounded-lg p-6 text-center shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                <p className="text-4xl font-extrabold text-blue-600">{item.count.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About Us</h3>
                            <p className="text-gray-400">We are dedicated to providing the best healthcare solutions to our patients and partners.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="text-gray-400">
                                <li><a href="#" className="hover:text-white">Home</a></li>
                                <li><a href="#" className="hover:text-white">Services</a></li>
                                <li><a href="#" className="hover:text-white">About</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <p className="text-gray-400">123 Healthcare Ave, Medical City, HC 12345</p>
                            <p className="text-gray-400">Phone: (123) 456-7890</p>
                            <p className="text-gray-400">Email: info@healthcare.com</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                            <form>
                                <input type="email" placeholder="Enter your email" className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none" />
                                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">&copy; 2023 Healthcare Platform. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaFacebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaTwitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaInstagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaLinkedin size={20} /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;