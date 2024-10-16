import React from 'react';

const ScheduleTable = () => {
  const courts = ['Court 1', 'Court 2', 'Court 3', 'Court 4', 'Court 5', 'Court 6'];
  const timeSlots = ['4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM'];

  const bookings = [
    { court: 'Court 1', time: '4 AM', name: 'Abbas', status: 'booked' },
    { court: 'Court 2', time: '4 AM', name: 'Vinay Hasya', status: 'booked' },
    { court: 'Court 1', time: '5 AM', name: 'Shantanu', status: 'booked' },
    { court: 'Court 2', time: '5 AM', name: 'Kailash', status: 'paid' },
    { court: 'Court 3', time: '5 AM', name: 'Venkatesh', status: 'collect' },
    { court: 'Court 1', time: '6 AM', name: 'Blocked', status: 'blocked' },
  ];

  const getBooking = (court, time) => {
    return bookings.find((booking) => booking.court === court && booking.time === time);
  };

  return (
    <div className="p-4">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th></th>
            {courts.map((court) => (
              <th key={court} className="border px-4 py-2 text-left">{court}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time) => (
            <tr key={time}>
              <td className="border px-4 py-2">{time}</td>
              {courts.map((court) => {
                const booking = getBooking(court, time);
                return (
                  <td key={court} className="border px-4 py-2">
                    {booking ? (
                      <div className={`p-2 rounded-lg ${booking.status === 'booked' ? 'bg-gray-200' : booking.status === 'paid' ? 'bg-green-200' : booking.status === 'collect' ? 'bg-red-200' : 'bg-yellow-200'}`}>
                        {booking.name}
                      </div>
                    ) : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
