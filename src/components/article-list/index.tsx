import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

interface ArticleType {
  frontmatter: {
    date: string,
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
      <ul className="space-y-4">
        {edges.map((edge) => (
          <li className="border rounded-md border-gray-700" key={edge.node.slug}>
            <Link to={edge.node.slug}>
              <div className="text-xl">{edge.node.frontmatter.title}</div>
              <div className="text-gray-400">
                <div>{edge.node.excerpt}</div>
                <span>{edge.node.frontmatter.date}</span>{" - "}
                <span>{edge.node.frontmatter.writer}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticleList;