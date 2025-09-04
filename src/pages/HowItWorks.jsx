import SEO from '../seo/SEO'

function HowItWorks() {
  return (
    <div className="prose max-w-none">
      <SEO
        title="How It Works | J&R’s Cleaning Organic Bombs"
        description="Drop. Fizz. Shine. See how natural fizz lifts grime and neutralizes odors for an easy, fresh clean."
        url="https://dropfizzers.com/how-it-works"
      />
      <h1 className="text-3xl font-bold mb-4">How It Works</h1>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>Drop:</strong> Place a bomb in your toilet, sink, or mop bucket.</li>
        <li><strong>Fizz:</strong> Let the natural fizz lift grime and neutralize odors.</li>
        <li><strong>Shine:</strong> Light scrub or rinse for a clean, fresh finish.</li>
      </ol>
      <p className="mt-4 italic">Tip: Store in a cool, dry place for maximum fizz.</p>
    </div>
  )
}
export default HowItWorks
