import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { ImageDataLike, GatsbyImage, getImage } from "gatsby-plugin-image";
import { getAvatarOf } from "../../utils/avatar";

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
              date(fromNow: true)
              thumbnail {
                childImageSharp {
                  gatsbyImageData(height:128)
                }
              }
              title
              writer
            }
            slug
          }
        }
      }
    }
  `);

  const mdxEdges = data.allMdx.edges;

  return (
    <>
      <h1 className="text-4xl py-4 font-bold">All Articles</h1>

      <ul className="space-y-4">
        {mdxEdges.map((edge) => (
          <Link to={edge.node.slug}>
            <li key={edge.node.slug} className="flex mb-6">
              <GatsbyImage className="thumbnail rounded-lg mt-1 mr-3 z-10" image={getImage(edge.node.frontmatter.thumbnail)!} alt="a" />
              <div className="flex flex-col">
                <h2 className="mb-1">{edge.node.frontmatter.title}</h2>
                <div className="text-gray-400 flex font-light text-md">
                  <div className="my-auto flex">
                    <GatsbyImage className="mr-2 avatar-mini rounded-full z-10" image={getImage(getAvatarOf(edge.node.frontmatter.writer))!} alt="icon of writer" />
                    <div className="py-auto">
                      <p className="inline">{edge.node.frontmatter.writer}</p>
                      <time className="text-gray-500 text-sm">・{edge.node.frontmatter.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>

    </>
  )
}

export default ArticleList;



