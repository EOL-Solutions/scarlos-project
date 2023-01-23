import { Helmet } from 'react-helmet'
const Seo = ({
  title = 'Landing',
  description = 'This is a description of the landing page',
  ...props
}) => {
  const seo = {
    title,
    description,
    titleTemplate: '%s | Landing'
    // image: `${url}logo192.png`,
    // url: `${url}${pathname}`
  }
  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <meta name='description' content={seo.description} />
      {/* <meta name='image' content={seo.image} />
      <link rel='canonical' href={url} /> */}
      <meta name='keywords' content={props.keywords || 'test,test'} />

      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && <meta property='og:description' content={seo.description} />}
      <meta property='og:site_name' content='Title Website' />
      {seo.url && <meta property='og:url' content={seo.url} />}
      {seo.image && <meta property='og:image' content={seo.image} />}

      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && <meta name='twitter:description' content={seo.description} />}
      {seo.image && <meta name='twitter:image' content={seo.image} />}
      {seo.url && <meta property='twitter:url' content={seo.url} />}
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>

  // <Helmet title={title} titleTemplate={`%s | ${siteMetadata.title}`}>
  //   <meta name="description" content={description} />
  //   <meta name="image" content={image} />
  //   {article && <meta property="og:type" content="article" />}
  //   {article && <meta property="og:article:author" content={siteMetadata.author} />}
  //   {article && <meta property="og:article:published_time" content={article.published} />}
  //   {article && <meta property="og:article:modified_time" content={article.modified} />}
  //   {article && <meta property="og:article:section" content={article.section} />}
  //   {article && <meta property="og:article:tag" content={article.tag} />}
  //   <meta property="og:url" content={siteMetadata.siteUrl} />
  //   <meta property="og:title" content={title} />
  //   <meta property="og:description" content={description} />
  //   <meta property="og:image" content={`${siteMetadata.siteUrl}${image}`} />
  //   <meta name="twitter:card" content="summary_large_image" />
  //   <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
  //   <meta name="twitter:title" content={title} />
  //   <meta name="twitter:description" content={description} />
  //   <meta name="twitter:image" content={`${siteMetadata.siteUrl}${image}`} />
  // </Helmet>
  )
}

export default Seo
