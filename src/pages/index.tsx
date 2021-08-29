import * as React from "react";
import ArticleList from "../components/article-list"
import Layout from "../layouts/single";

const IndexPage = () => {
  return (
    <Layout>
      <main className="container mx-auto px-4 max-w-xl">
        <ArticleList></ArticleList>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quidem?</p>
      </main>
    </Layout>
  )
}

export default IndexPage
