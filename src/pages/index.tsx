import * as React from "react";
import ArticleList from "../components/article-list";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <div className="container mx-auto px-4 max-w-xl min-h-full">
      <SEO title="Blog"/>
      <ArticleList />
    </div>
  )
}

export default IndexPage
