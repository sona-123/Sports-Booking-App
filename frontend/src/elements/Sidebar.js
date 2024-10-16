import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 h-screen p-4">
      <h1 className="text-white text-xl font-semibold mb-6">NEXUS</h1>
      <nav>
        <a href="#" className="block text-white py-2 px-4 rounded hover:bg-gray-700">Dashboard</a>
        <a href="#" className="block text-white py-2 px-4 rounded hover:bg-gray-700">Schedule</a>
        <a href="#" className="block text-white py-2 px-4 rounded hover:bg-gray-700">Customers</a>
        <a href="#" className="block text-white py-2 px-4 rounded hover:bg-gray-700">Coachings</a>
        <a href="#" className="block text-white py-2 px-4 rounded hover:bg-gray-700">Attendance</a>
      </nav>
    </div>
  );
};

export default Sidebar;
