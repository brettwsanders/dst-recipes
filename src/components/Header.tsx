import React from 'react';
import './Header.css';

type HeaderProps = {
}

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-name">Image</div>
      <div className="header-name">Name</div>
      <div className="header-name">Health</div>
      <div className="header-name">Hunger</div>
      <div className="header-name">Sanity</div>
    </div>
  );
}

export default Header;
