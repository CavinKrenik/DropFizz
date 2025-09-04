import SEO from '../seo/SEO'

function FAQ() {
  return (
    <div>
      <SEO
        title="FAQ | J&R’s Cleaning Organic Bombs"
        description="Answers about safety, storage, shipping, returns, and how our natural fizzing cleaners work."
        url="https://dropfizzers.com/faq"
      />
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold">Are they safe for pets and kids?</h2>
          <p>Yes—non-toxic, but not for ingestion. Supervise children and keep out of reach.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold">Do they disinfect?</h2>
          <p>No. They help clean and deodorize naturally without claiming to disinfect.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold">How should I store them?</h2>
          <p>In a cool, dry place to preserve fizzing action.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold">Shipping & Returns</h2>
          <p>Typical processing 1–3 days. Returns within 30 days for unopened items.</p>
        </div>
      </div>
    </div>
  )
}
export default FAQ
