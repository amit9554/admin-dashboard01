import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaChartBar, FaCalendar, FaEnvelope, FaSearch } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('');

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? '' : menu);
    };

    const chartData = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 600 },
        { name: 'Apr', value: 800 },
        { name: 'May', value: 500 },
        { name: 'Jun', value: 700 },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-20`}
            >
                <nav>
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-2xl font-semibold">Admin Dashboard</span>
                        <button onClick={toggleSidebar} className="md:hidden">
                            <FaTimes className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="space-y-3">
                        <button
                            onClick={() => toggleMenu('dashboard')}
                            className="flex items-center space-x-2 w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                        >
                            <FaHome className="h-5 w-5" />
                            <span>Dashboard</span>
                        </button>
                        <button
                            onClick={() => toggleMenu('users')}
                            className="flex items-center space-x-2 w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                        >
                            <FaUser className="h-5 w-5" />
                            <span>Users</span>
                        </button>
                        <button
                            onClick={() => toggleMenu('settings')}
                            className="flex items-center space-x-2 w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                        >
                            <FaCog className="h-5 w-5" />
                            <span>Settings</span>
                        </button>
                        <button
                            onClick={() => toggleMenu('analytics')}
                            className="flex items-center space-x-2 w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                        >
                            <FaChartBar className="h-5 w-5" />
                            <span>Analytics</span>
                        </button>
                        <button
                            onClick={() => toggleMenu('calendar')}
                            className="flex items-center space-x-2 w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                        >
                            <FaCalendar className="h-5 w-5" />
                            <span>Calendar</span>
                        </button>
                        <button
                            onClick={() => toggleMenu('messages')}
                            className="flex items-center space-x-2 w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                        >
                            <FaEnvelope className="h-5 w-5" />
                            <span>Messages</span>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-gray-200">
                    <div className="flex items-center">
                        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none md:hidden">
                            <FaBars className="h-6 w-6" />
                        </button>
                        <div className="relative mx-4 lg:mx-0">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <FaSearch className="h-5 w-5 text-gray-500" />
                            </span>
                            <input
                                className="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600"
                                type="text"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="flex mx-4 text-gray-600 focus:outline-none">
                            <FaUser className="h-6 w-6" />
                        </button>
                    </div>
                </header>

                {/* Main content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard Overview</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold mb-4">Total Users</h2>
                            <p className="text-3xl font-bold">10,567</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold mb-4">Revenue</h2>
                            <p className="text-3xl font-bold">$24,500</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
                            <p className="text-3xl font-bold">23</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4">Revenue Chart</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <span className="bg-blue-500 rounded-full w-3 h-3"></span>
                                <span>New user registered</span>
                                <span className="text-gray-500 text-sm">2 minutes ago</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="bg-green-500 rounded-full w-3 h-3"></span>
                                <span>Project XYZ completed</span>
                                <span className="text-gray-500 text-sm">1 hour ago</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="bg-yellow-500 rounded-full w-3 h-3"></span>
                                <span>Server maintenance scheduled</span>
                                <span className="text-gray-500 text-sm">3 hours ago</span>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;