import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const sportsList = [
  'Swimming',
  'Badminton',
  'Soccer',
  'Basketball',
  'Tennis',
  'Baseball',
  'Volleyball',
  'Rugby',
  'Cricket',
  'Golf',
];

const Filter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSportsDropdownOpen, setIsSportsDropdownOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState('Select a sport');

  const handleDateChange = (date) => {
    setStartDate(date);
    setIsCalendarOpen(false);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const toggleSportsDropdown = () => {
    setIsSportsDropdownOpen(!isSportsDropdownOpen);
  };

  const handleSportSelect = (sport) => {
    setSelectedSport(sport);
    setIsSportsDropdownOpen(false); // Close dropdown after selecting a sport
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex space-x-4">
        <div className="relative">
          <button 
            className="bg-gray-200 px-4 py-2 rounded-lg flex items-center"
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          >
            {formatDate(startDate)}
            <FontAwesomeIcon icon={faCalendarAlt} className="ml-2" />
          </button>
          {isCalendarOpen && (
            <div className="absolute z-10 mt-1">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                inline
                className="bg-white border border-gray-300 rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
        <div className="relative">
          <button 
            className="bg-gray-300 px-4 py-2 rounded-lg flex items-center" 
            onClick={toggleSportsDropdown}
          >
            {selectedSport}
            <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
          </button>
          {isSportsDropdownOpen && (
            <div className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul className="max-h-60 overflow-y-auto">
                {sportsList.map((sport) => (
                  <li 
                    key={sport} 
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSportSelect(sport)}
                  >
                    {sport}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
     
    </div>
  );
};

export default Filter;
