import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

interface ArticleType {
  frontmatter: {
    date: string,
    thumbnail: string,
    title: string,
    writer: string
  }
  slug: string
  excerpt: string
}

interface ArticleListType {
  allMdx: {
    edges: {
      node: ArticleType
    }[]
  }
}

const ArticleList: React.FC = () => {
  const data = useStaticQuery<ArticleListType>(graphql`
    query articleList {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY年MM月DD日")
              thumbnail
              title
              writer
            }
            slug
            excerpt(pruneLength: 80)
          }
        }
      }
    }
  `);
  const edges = data.allMdx.edges;

  return (
    <div>
      <h1>全ての記事</h1>
      <ul>
        {edges.map((edge) => (
          <li key={edge.node.slug}>
            <Link to={edge.node.slug}>
              <div>{edge.node.frontmatter.title}</div>
              <div>{edge.node.excerpt}</div>
              <span>{edge.node.frontmatter.date}</span>{" "}
              <span>{edge.node.frontmatter.writer}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticleList;