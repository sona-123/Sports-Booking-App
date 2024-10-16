import React, { useEffect, useState } from 'react';
import { fetchCompanies } from '../api/api';

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const loadCompanies = async () => {
      const response = await fetchCompanies();
      setCompanies(response.data);
    };
    loadCompanies();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {companies.map((company) => (
        <div key={company._id}>
          <h3>{company.name}</h3>
          {/* Add components to display and manage centers, sports, and courts */}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
