import SEO from '../seo/SEO'

function HolidayKit() {
  return (
    <div className="prose max-w-none">
      <SEO
        title="Holiday Kits | J&R’s Cleaning Organic Bombs"
        description="Festive, gift-ready cleaning bomb bundles in scents like peppermint, pine, cinnamon, and citrus."
        url="https://example.com/holiday-kits"
      />
      <h1 className="text-3xl font-bold mb-4">Holiday Kits</h1>
      <p>Gift-ready bundles with festive scents like peppermint, pine, cinnamon, and citrus. Packed in kraft with red & gold accents.</p>
      <ul className="list-disc pl-6">
        <li>Winter Wonderland (4-pack)</li>
        <li>Holiday Cheer (6-pack)</li>
        <li>Sampler Jar (10 minis)</li>
      </ul>
      <p className="mt-4">Prices: $14.99–$25.99</p>
    </div>
  )
}
export default HolidayKit
