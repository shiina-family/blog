import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const ArticleLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main className="mt-16">
        {children}
      </main>
      <Footer></Footer>
    </>
  );
};

export default ArticleLayout;