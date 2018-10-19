import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import getHostname from '../utils/getHostname'

class SEO extends Component {
  getSchemaOrgJSONLD() {
    const { url, title, description } = this.props
    return {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      title,
      description,
    }
  }

  render() {
    const {
      url,
      title,
      description,
      twitterAccount,
      // Open Graph tags
      ogTitle,
      ogDescription,
      ogImage,
      ogSiteName,
      ogType,
    } = this.props

    return (
      <Helmet>
        {/* General tags */}
        <meta charSet="utf-8" />
        {title && <title>{title}</title>}
        {url && <link rel="canonical" href={url} />}
        {description && <meta name="description" content={description} />}

        {/* Schema.org tags */}
        {title &&
          url &&
          description && (
            <script type="application/ld+json">{`
            ${JSON.stringify(this.getSchemaOrgJSONLD())}
          `}</script>
          )}

        {/* OpenGraph tags */}
        {ogSiteName || (url && <meta property="og:site_name" content={ogSiteName ? ogSiteName : getHostname(url)} />)}
        {url && <meta property="og:url" content={url} />}
        {ogTitle || (title && <meta property="og:title" content={ogTitle ? ogTitle : title} />)}
        {ogDescription ||
          (description && <meta property="og:description" content={ogDescription ? ogDescription : description} />)}
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogType && <meta property="og:type" content={ogType} />}

        {/* Twitter Card tags */}
        {twitterAccount && <meta name="twitter:card" content="summary_large_image" />}
        {twitterAccount && <meta name="twitter:creator" content={twitterAccount} />}
        {title && <meta name="twitter:title" content={title} />}
        {description && <meta name="twitter:description" content={description} />}
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Helmet>
    )
  }
}

SEO.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // Open Graph tags
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogImage: PropTypes.string,
  ogSiteName: PropTypes.string,
  ogType: PropTypes.string,
}

SEO.defaultProps = {
  ogType: 'website'
}

export default SEO
