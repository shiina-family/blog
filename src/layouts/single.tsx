import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const minHeight = {
  minHeight: 'calc(100vh - 172px)'
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