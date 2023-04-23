import React from 'react';
import { FaBell } from 'react-icons/fa';

const Header = ({ numNotifications, handleClearNotifications }) => (
  <header>
    <h1>My Personal Blog</h1>
    <div className="notification-icon" onClick={handleClearNotifications}>
      <FaBell />
      {numNotifications > 0 && <span className="badge">{numNotifications}</span>}
    </div>
  </header>
);

export default Header;
