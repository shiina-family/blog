import React from "react";
import Header from "../header";
import Footer from "../footer";

import "../../styles/global.css";
import "prismjs/themes/prism-twilight.css";

const minHeight = {
  minHeight: 'calc(100vh - 64px - 32px)'
}

const SingleLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main style={minHeight} className="mt-16">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default SingleLayout;