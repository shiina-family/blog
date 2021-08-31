import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import { getAvatarOf } from "../utils/avatar";

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
    <>
      <article className="container max-w-screen-blog mx-auto px-4">
        <h1 className="py-8 text-4xl font-bold">{data.mdx.frontmatter.title}</h1>
        <GatsbyImage className="rounded-md z-10" image={getImage(data.mdx.frontmatter.thumbnail)!} alt="a" />
        <div className="border-t border-b border-gray-700 py-1 my-4 px-0 flex items-center">
          <GatsbyImage className="mx-2 w-12 h-12 rounded-full z-10" image={getImage(getAvatarOf(data.mdx.frontmatter.writer))!} alt="icon of writer" />
          <div>
            <p className="text-lg font-semibold">{data.mdx.frontmatter.writer}</p>
            <time className="text-sm text-gray-400">{data.mdx.frontmatter.date} に公開</time>
          </div>
        </div>

        <div className="prose">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>

      </article>
      <Link to="/" className="block font-bold text-2xl py-4 text-center text-blue-500">back</Link>
      </>
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
            gatsbyImageData(width:640 height:320)
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