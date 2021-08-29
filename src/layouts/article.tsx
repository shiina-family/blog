import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const ArticleLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default ArticleLayout;