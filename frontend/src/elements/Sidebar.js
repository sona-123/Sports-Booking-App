import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 h-screen p-4">
      <h1 className="text-white text-xl font-semibold mb-6">NEXUS</h1>
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className="text-white" />
        </ListItem>
        <ListItem button className="bg-gray-700">
          <ListItemIcon>
            <ScheduleIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Schedule" className="text-white" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Customers" className="text-white" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SchoolIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Coaching" className="text-white" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EventIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Attendance" className="text-white" />
        </ListItem>
      </List>
      <div className="absolute bottom-0 p-4 w-full">
        <div className="flex items-center mb-2">
          <div className="bg-gray-600 rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-white font-semibold">TN</span>
          </div>
          <span className="text-white ml-2">Tarikul</span>
        </div>
        <p className="text-gray-400 text-sm">Game Theory HSR Layout</p>
      </div>
    </div>
  );
};

export default Sidebar;
