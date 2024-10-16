// src/components/BookingManager.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingManager = () => {
  const [centers, setCenters] = useState([]); // Array of centers
  const [sports, setSports] = useState([]); // Array of sports
  const [selectedCenter, setSelectedCenter] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [date, setDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);
  const [slot, setSlot] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch available centers and sports (you should replace these URLs with your own API endpoints)
  useEffect(() => {
    const fetchCenters = async () => {
      // Replace with your API endpoint for fetching centers
      const response = await axios.get('/api/centers');
      setCenters(response.data);
    };

    const fetchSports = async () => {
      // Replace with your API endpoint for fetching sports
      const response = await axios.get('/api/sports');
      setSports(response.data);
    };

    fetchCenters();
    fetchSports();
  }, []);

  // Fetch bookings based on selected center, sport, and date
  const fetchBookings = async () => {
    try {
      const response = await axios.get('/api/bookings', {
        params: {
          center: selectedCenter,
          sport: selectedSport,
          date: date.toISOString().split('T')[0], // Send the date in YYYY-MM-DD format
        },
      });
      setBookings(response.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Error fetching bookings');
      setBookings([]);
    }
  };

  // Create a new booking
  const createBooking = async () => {
    try {
      const response = await axios.post('/api/bookings', {
        center: selectedCenter,
        sport: selectedSport,
        court: 'Court 1', // Replace with your logic for selecting the court
        slot,
        date,
      });
      setSuccessMessage(response.data.message);
      fetchBookings(); // Refresh the bookings list
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Error creating booking');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Booking Manager</h1>
      <div className="mb-4">
        <label>
          Select Center:
          <select onChange={(e) => setSelectedCenter(e.target.value)}>
            <option value="">Select a center</option>
            {centers.map((center) => (
              <option key={center} value={center}>
                {center}
              </option>
            ))}
          </select>
        </label>
        <label>
          Select Sport:
          <select onChange={(e) => setSelectedSport(e.target.value)}>
            <option value="">Select a sport</option>
            {sports.map((sport) => (
              <option key={sport} value={sport}>
                {sport}
              </option>
            ))}
          </select>
        </label>
        <label>
          Select Date:
          <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
        </label>
        <button onClick={fetchBookings}>View Bookings</button>
      </div>

      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      {successMessage && <div className="text-green-500">{successMessage}</div>}

      <div>
        <h2 className="text-xl font-semibold">Bookings:</h2>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300">Court</th>
              <th className="border border-gray-300">Slot</th>
              <th className="border border-gray-300">User</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr key={index}>
                  <td className="border border-gray-300">{booking.court}</td>
                  <td className="border border-gray-300">{booking.slot}</td>
                  <td className="border border-gray-300">{booking.user.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="border border-gray-300 text-center">No bookings found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-4">Create New Booking:</h2>
      <label>
        Slot:
        <input
          type="text"
          placeholder="e.g., 10:00 AM - 11:00 AM"
          value={slot}
          onChange={(e) => setSlot(e.target.value)}
        />
      </label>
      <button onClick={createBooking}>Create Booking</button>
    </div>
  );
};

export default BookingManager;
