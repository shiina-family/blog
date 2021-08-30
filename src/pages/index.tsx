import * as React from "react";
import ArticleList from "../components/article-list"
import Layout from "../layouts/single";

const IndexPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-xl min-h-full">
        <ArticleList />
      </div>
    </Layout>
  )
}

export default IndexPage
