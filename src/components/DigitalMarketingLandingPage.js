import React from 'react';
import { FaRocket, FaChartLine, FaBullhorn, FaLaptopCode } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const DigitalMarketingLandingPage = () => {
    const services = [
        { icon: <FaRocket />, title: 'Strategy', description: 'Tailored marketing strategies to boost your business' },
        { icon: <FaChartLine />, title: 'Analytics', description: 'Data-driven insights to optimize your campaigns' },
        { icon: <FaBullhorn />, title: 'Social Media', description: 'Engaging content across all platforms' },
        { icon: <FaLaptopCode />, title: 'Web Development', description: 'Custom websites that convert visitors into customers' },
    ];

    const portfolio = [
        { image: 'images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80', client: 'TechCorp', testimonial: 'The team delivered exceptional results, increasing our online presence significantly.' },
        { image: 'images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', client: 'FashionHub', testimonial: 'Our sales skyrocketed after implementing their social media strategy.' },
        { image: 'images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', client: 'EcoSolutions', testimonial: 'Their innovative approach helped us reach a wider audience and increase brand awareness.' },
    ];

    const team = [
        { name: 'John Doe', title: 'CEO & Founder', image: 'images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', bio: 'Digital marketing expert with 15+ years of experience.' },
        { name: 'Jane Smith', title: 'Creative Director', image: 'images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80', bio: 'Award-winning designer specializing in brand identity.' },
        { name: 'Mike Johnson', title: 'Head of Analytics', image: 'images.unsplash.com/photo-1577880216142-8c9f9d0e3b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', bio: 'Data scientist with a passion for actionable insights.' },
    ];

    return (
        <div className="font-sans bg-gray-100">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
                <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">Elevate Your Digital Presence</h1>
                    <p className="text-xl mb-8 animate-fade-in-up">Innovative strategies. Measurable results. Unparalleled growth.</p>
                    <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 animate-bounce">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                                <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Showcase */}
            <section className="py-20 bg-gray-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolio.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                                <img src={item.image} alt={item.client} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{item.client}</h3>
                                    <p className="text-gray-600 italic">"{item.testimonial}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                    <p className="text-gray-600 mb-3">{member.title}</p>
                                    <p className="text-gray-700">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
                    <div className="max-w-2xl mx-auto">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 rounded-md text-gray-900" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 rounded-md text-gray-900" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-2 rounded-md text-gray-900" required></textarea>
                            </div>
                            <button type="submit" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold">DigitalBoost Agency</h3>
                            <p className="mt-2">Elevating brands in the digital realm</p>
                        </div>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-blue-400 transition duration-300">Home</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition duration-300">Services</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition duration-300">Portfolio</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition duration-300">About Us</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition duration-300">Contact</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                            <div className="flex items-center mb-2">
                                <MdEmail className="mr-2" />
                                <a href="mailto:info@digitalboost.com" className="hover:text-blue-400 transition duration-300">info@digitalboost.com</a>
                            </div>
                            <div className="flex items-center">
                                <MdPhone className="mr-2" />
                                <a href="tel:+1234567890" className="hover:text-blue-400 transition duration-300">+1 (234) 567-890</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p>&copy; 2023 DigitalBoost Agency. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DigitalMarketingLandingPage;
