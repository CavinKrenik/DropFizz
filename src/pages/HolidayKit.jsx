import SEO from '../seo/SEO'

function HolidayKit() {
  return (
    <div className="prose max-w-none">
      <SEO
        title="Holiday Kits | J&R’s Cleaning Organic Bombs"
        description="Festive, gift-ready cleaning bomb bundles in scents like peppermint, pine, cinnamon, and citrus."
        url="https://dropfizzers.com/holiday-kits"
      />
      <h1 className="text-3xl font-bold mb-4">Holiday Kits</h1>
      <p>Gift-ready bundles with festive scents like peppermint, pine, cinnamon, and citrus. Package with red & gold accents.</p>
      <ul className="list-disc pl-6">
        <li>Winter Wonderland (4-pack)</li>
        <li>Holiday Cheer (6-pack)</li>
        <li>Festive Fizz (12-pack)</li>
      </ul>
      <p className="mt-4">Prices: $4.99–$15.99</p>
    </div>
  )
}
export default HolidayKit
