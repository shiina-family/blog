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
      <article className="prose mx-auto px-4">
        <h1 className="pt-8">{data.mdx.frontmatter.title}</h1>
        {/* GatsbyImage: gatsby-image-wrapper あたりの影響で、 */}
        {/* dev段階では描画がズレる。ビルド後は問題ない。 */}
        <GatsbyImage image={getImage(data.mdx.frontmatter.thumbnail)!} alt="a" />
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