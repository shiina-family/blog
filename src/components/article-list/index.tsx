import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { ImageDataLike, GatsbyImage, getImage } from "gatsby-plugin-image";
import { getAvatarOf } from "../avatar";

interface ArticleType {
  frontmatter: {
    date: string,
    thumbnail: ImageDataLike,
    title: string,
    writer: string
  }
  slug: string
  excerpt: string
}

interface AllArticleType {
  allMdx: {
    edges: {
      node: ArticleType
    }[]
  }

}

const ArticleList: React.FC = () => {
  const data = useStaticQuery<AllArticleType>(graphql`
    query articleList {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              date(formatString: "YYYY年MM月DD日")
              thumbnail {
                childImageSharp {
                  gatsbyImageData(height:128)
                }
              }
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

  const mdxEdges = data.allMdx.edges;

  return (
    <div>
      <h1 className="text-4xl py-4 font-bold">All Articles</h1>
      <ul className="space-y-4">
        {mdxEdges.map((edge) => (
          <li className="border rounded-md border-gray-700" key={edge.node.slug}>
            <Link to={edge.node.slug}>
              <div className="flex">
                <GatsbyImage className="w-28-force h-28-force mr-1 rounded-l-md z-10" image={getImage(edge.node.frontmatter.thumbnail)!} alt="a" />
                <div className="min-w-0 p-1 flex flex-col">
                  <h2 className="text-lg mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap">{edge.node.frontmatter.title}</h2>
                  <p className="text-gray-400 flex-grow overflow-hidden overflow-ellipsis whitespace-nowrap">{edge.node.excerpt}</p>
                  <div className="text-gray-400 flex">
                    <time>{edge.node.frontmatter.date}</time>{" - "}
                    <div className="my-auto">
                    <GatsbyImage className="max-w-7 rounded-full z-10" image={getImage(getAvatarOf(edge.node.frontmatter.writer))!} alt="icon of writer" />
                    <p className="inline">{edge.node.frontmatter.writer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticleList;



