import React from 'react';
import {Link}from 'gatsby';


const Header: React.FC = () => {
  return (
    <header className="h-16 bg-blue-500">
      <Link to="/">
      <div>Shiina</div>
      </Link>
    </header>
  )
}

export default Header;