import React, { useState } from 'react';

// Mock Data for demonstration
const mockCompanyData = {
  name: "ABC Sports Company",
  centers: [
    {
      id: 1,
      name: "Downtown Center",
      sports: [
        {
          name: "Swimming",
          courts: ["Pool A", "Pool B"],
          schedule: [
            { time: "10:00 AM - 11:00 AM", available: true },
            { time: "11:30 AM - 12:30 PM", available: false },
          ],
        },
        {
          name: "Badminton",
          courts: ["Court 1", "Court 2", "Court 3"],
          schedule: [
            { time: "09:00 AM - 10:00 AM", available: true },
            { time: "02:00 PM - 03:00 PM", available: true },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Uptown Center",
      sports: [
        {
          name: "Tennis",
          courts: ["Court 1", "Court 2"],
          schedule: [
            { time: "08:00 AM - 09:00 AM", available: true },
            { time: "05:00 PM - 06:00 PM", available: false },
          ],
        },
      ],
    },
  ],
};

const mockCustomerData = {
  name: "John Doe",
  bookings: [
    {
      sport: "Swimming",
      date: "2024-10-16",
      time: "10:00 AM - 11:00 AM",
      center: "Downtown Center",
    },
    {
      sport: "Badminton",
      date: "2024-10-17",
      time: "02:00 PM - 03:00 PM",
      center: "Uptown Center",
    },
  ],
};

const Dashboard = ({ userType }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  // Render for Company
  const renderCompanyDashboard = () => (
    <div>
      <h2>{mockCompanyData.name} - Dashboard</h2>
      {mockCompanyData.centers.map((center) => (
        <div key={center.id} className="border p-4 my-4">
          <h3 className="text-xl font-bold">{center.name}</h3>
          {center.sports.map((sport, index) => (
            <div key={index} className="mt-4">
              <h4 className="text-lg font-semibold">{sport.name}</h4>
              <ul className="ml-4">
                {sport.courts.map((court, idx) => (
                  <li key={idx}>Court: {court}</li>
                ))}
              </ul>
              <div className="mt-2">
                <h5 className="font-semibold">Schedule for {selectedDate}</h5>
                {sport.schedule.map((slot, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span>{slot.time}</span>
                    <span>{slot.available ? "Available" : "Booked"}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  // Render for Customer
  const renderCustomerDashboard = () => (
    <div>
      <h2>{mockCustomerData.name}'s Dashboard</h2>
      <div className="mt-4">
        <h3 className="font-semibold">Your Bookings</h3>
        {mockCustomerData.bookings.map((booking, idx) => (
          <div key={idx} className="border p-2 my-2">
            <p>Sport: {booking.sport}</p>
            <p>Date: {booking.date}</p>
            <p>Time: {booking.time}</p>
            <p>Center: {booking.center}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="font-semibold">Create a New Booking</h3>
        <button className="bg-blue-500 text-white p-2 rounded">Book Now</button>
      </div>
    </div>
  );

  return (
    <div className="p-4">
      {userType === 'company' ? renderCompanyDashboard() : renderCustomerDashboard()}
    </div>
  );
};

export default Dashboard;
