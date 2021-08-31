import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Header: React.FC = () => {
  return (
    <header className="no-highlighting h-16 bg-black flex items-center fixed top-0 w-full z-50 px-4">
      <Link to="/" className="flex items-center">
        <StaticImage className="rounded-full z-10" src="../../../static/icon.jpg" alt="logo" width={44} />
        <span className="pl-2 text-4xl font-bold">shiina</span>
      </Link>
    </header>
  )
}

export default Header;