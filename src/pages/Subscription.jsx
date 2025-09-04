import SEO from '../seo/SEO'

function Subscription() {
  return (
    <div className="prose max-w-none">
      <SEO
        title="Subscription | J&R’s Cleaning Organic Bombs"
        description="Subscribe and save: 15 bombs delivered monthly. Cancel anytime."
        url="https://dropfizzers.com/subscription"
      />
      <h1 className="text-3xl font-bold mb-4">Monthly Subscription</h1>
      <p>Never run out of fizz! Get a monthly box of 15 bombs for $29.99. Cancel anytime.</p>
      <form className="bg-white p-4 rounded-lg shadow-md max-w-md">
        <label className="block mb-2 font-bold">Email</label>
        <input type="email" className="w-full border p-2 rounded mb-4" placeholder="Enter your email" />
        <button type="button" onClick={() => console.log('Subscribe - connect Stripe/Email CRM')}
          className="bg-eco-green text-white px-6 py-3 rounded-full font-bold shadow-md">Subscribe Now</button>
      </form>
    </div>
  )
}
export default Subscription
