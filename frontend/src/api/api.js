import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Fetch all companies
export const fetchCompanies = () => axios.get(`${API_URL}/companies`);

// Create a new company
export const createCompany = (name) => axios.post(`${API_URL}/companies`, { name });

// Fetch centers by company
export const fetchCenters = (companyId) => axios.get(`${API_URL}/centres?companyId=${companyId}`);

// Add new center
export const createCentre = (companyId, name, location) => 
  axios.post(`${API_URL}/centres`, { companyId, name, location });

// Add sport to a center
export const addSport = (centreId, sportName) => 
  axios.post(`${API_URL}/sports`, { centreId, name: sportName });

// Add court to a sport
export const addCourt = (sportId, courtName) => 
  axios.post(`${API_URL}/courts`, { sportId, name: courtName });
