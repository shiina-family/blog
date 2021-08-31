import React from "react";
import Header from "../header";
import Footer from "../footer";

const minHeight = {
  minHeight: 'calc(100vh - 64px)'
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