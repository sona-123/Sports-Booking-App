import React from 'react';

import Sidebar from './elements/Sidebar';
import Navbar from './elements/Navbar';
import Filter from './elements/DateSportFilter'; // Assuming this component exists
import BookingManager from './elements/BookingManager';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100"> {/* Add a background color for better contrast */}
        <Navbar />
        <Filter />
        <BookingManager/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
