import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const minHeight = {
  minHeight: 'calc(100vh - 172px)'
}

const SingleLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main style={minHeight} className="mt-16">
        {children}
      </main>
      <Footer></Footer>
  </>
  );
};

export default SingleLayout;