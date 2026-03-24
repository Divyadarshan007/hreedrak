import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://www.jadkohealthcare.com'
const DEFAULT_IMAGE = `${BASE_URL}/12577-comp-image.png`

const SEOMeta = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  structuredData = null,
}) => {
  const fullTitle = title
    ? `${title} | Hreedrak Bioscience`
    : 'Hreedrak Bioscience Private Limited | Blood Collection Tube Manufacturer'

  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Hreedrak Bioscience" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOMeta
