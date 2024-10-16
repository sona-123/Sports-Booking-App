// src/data/mockData.js
export const centers = [
    { id: 1, name: 'Indiranagar' },
    { id: 2, name: 'Koramangala' },
  ];
  
  export const sports = [
    { id: 1, name: 'Badminton', centerId: 1 },
    { id: 2, name: 'Squash', centerId: 1 },
    { id: 3, name: 'Badminton', centerId: 2 },
    { id: 4, name: 'Squash', centerId: 2 },
  ];
  
  export const courts = [
    { id: 1, sportId: 1, name: 'Court 1' },
    { id: 2, sportId: 1, name: 'Court 2' },
    { id: 3, sportId: 2, name: 'Court 1' },
    { id: 4, sportId: 2, name: 'Court 2' },
    { id: 5, sportId: 3, name: 'Court 1' },
    { id: 6, sportId: 4, name: 'Court 1' },
  ];
  
  // Assuming each center has a fixed set of booking slots from 8 AM to 8 PM
  export const timeSlots = Array.from({ length: 12 }, (_, index) => {
    const hour = 8 + index; // 8 AM is hour 8
    return `${hour % 12 || 12} ${hour < 12 ? 'AM' : 'PM'}`; // Format hour for AM/PM
  });
  