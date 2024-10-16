import React from 'react';

const Filter = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex space-x-4">
        <button className="bg-gray-200 px-4 py-2 rounded-lg">27th Feb 2024</button>
        <button className="bg-gray-300 px-4 py-2 rounded-lg">Swimming</button>
        <button className="bg-gray-300 px-4 py-2 rounded-lg">Badminton</button>
      </div>
    </div>
  );
};

export default Filter;
