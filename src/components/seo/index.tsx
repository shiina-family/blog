import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

interface PropsType {
  title: string,
  description?: string,
  imagesrc?: any,
  twitter?: string,
  pathname?: string,
  lang?: string,
}

const SEO: React.FC<PropsType> = ({ title, description, imagesrc, twitter, pathname, lang }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        {console.log(imagesrc)}
        const metaDescription = description || data.site.siteMetadata.description
        const metaImage = imagesrc ? `${data.site.siteMetadata.siteUrl}${imagesrc}` : null
        const metaUrl = `${data.site.siteMetadata.siteUrl}/${pathname}`
        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:creator`,
                content: twitter,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(metaImage ? [
                {
                  property: `og:image`,
                  content: metaImage
                },
                {
                  property: `og:image:alt`,
                  content: title,
                },
                // {
                //   property: 'og:image:width',
                //   content: image.width
                // },
                // {
                //   property: 'og:image:height',
                //   content: image.height
                // },
                {
                  name: `twitter:card`,
                  content: `summary_large_image`,
                }
              ] : [
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
              ])
            }
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `ja`,
  pathname: ``
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`