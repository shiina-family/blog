import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

interface ArticleType {
  data: {
    mdx: {
      html: string,
      frontmatter: {
        date: string,
        thumbnail: string,
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
    <div>
      <article>
        {/* Todo: 画像に置き換える */}
        <div>{data.mdx.frontmatter.thumbnail}</div>
        <h1>{data.mdx.frontmatter.title}</h1>
        <div>
          <span>{data.mdx.frontmatter.writer}</span>
          <span>{data.mdx.frontmatter.date}</span>
        </div>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Link to="/">back</Link>
      </article>
    </div>
  )
}

export default Article;

export const query = graphql`
    query articleTemplate($id: String!) {
      mdx(id: {eq: $id}) {
        frontmatter {
          date(formatString: "YYYY年MM月DD日")
          thumbnail
          title
          writer
        }
        body
        slug
      }
    }
`