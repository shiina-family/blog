import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import Layout from "../layouts/article";

interface ArticleType {
  data: {
    mdx: {
      html: string,
      frontmatter: {
        date: string,
        thumbnail: ImageDataLike,
        title: string,
        writer: string
      }
      body: string,
      slug: string
    }
  }
}

const Article: React.FC<ArticleType> = ({ data }) => {
  return (
    <Layout>
        <GatsbyImage image={getImage(data.mdx.frontmatter.thumbnail)!} alt="a" />
        <h1>{data.mdx.frontmatter.title}</h1>
        <div>
          <span>{data.mdx.frontmatter.writer}</span>
          <span>{data.mdx.frontmatter.date}</span>
        </div>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Link to="/">back</Link>
      </article>
    </Layout>
  )
}

export default Article;

export const query = graphql`
  query articleTemplate($id: String!) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "YYYY年MM月DD日")
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
        title
        writer
      }
      body
      slug
    }
  }
`