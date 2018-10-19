import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../main'
import config from '../../../site-config'
import SEO from '../../components/SEO'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO
        url={`${config.url}${frontmatter.path}`}
        title={`${frontmatter.title} | ${config.title}`}
        description={frontmatter.description}
        ogTitle={frontmatter.title}
        ogSiteName={config.ogSiteName}
        ogImage={frontmatter.image}
      />
      <article className='markdown-body'>
        <h1>
          {frontmatter.title}
        </h1>
        <div
          className='markdown-page-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
