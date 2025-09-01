import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = "J&R’s Cleaning Organic Bombs",
  description = "Eco • Handmade • Safe • Effective fizzing cleaners. Simple, organic ingredients. No toxins. No plastic.",
  image = "/logo.png",   // can be /logo.svg too
  url = "https://example.com" // update when deployed
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
