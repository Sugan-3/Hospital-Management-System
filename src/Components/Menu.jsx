// Menu.js
import React from 'react';
import './menuStyle.css';

const Menu = () => {
  return (
    <div className="menuContainer">
      <ul className="menuContent">
        <li>Dashboard</li>
        <li>Patients</li>
        <li>Appointments</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Menu;

