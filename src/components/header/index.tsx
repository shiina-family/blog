import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-black flex items-center fixed top-0 w-full z-50 px-4">
      <Link to="/">
        <StaticImage src="../../../content/assets/icon.png" alt="logo" width={44} />
      </Link>
    </header>
  )
}

export default Header;