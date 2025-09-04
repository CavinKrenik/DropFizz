import { Link } from 'react-router-dom'
import SEO from '../seo/SEO'

function Home() {
  return (
    <div>
      <SEO
        title="J&R’s Cleaning Organic Bombs — Drop. Fizz. Shine."
        description="Eco-friendly, handmade cleaning bombs for toilets, sinks, showers, laundry, and floors."
        image="/logo.png"
        url="https://example.com/"
      />

      {/* HERO: logo left, text right */}
      <section className="py-12 bg-gradient-to-r from-eco-green to-fizz-blue rounded-lg shadow-lg text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-center justify-center gap-10 px-6">
          {/* Logo (left) */}
          <div className="flex-shrink-0">
            <img
              src="/logo.png"                // or /logo.png
              alt="J&R’s Cleaning Organic Bombs"
              className="h-40 sm:h-56 md:h-64 lg:h-72 w-auto drop-shadow-lg"
            />
          </div>

          {/* Text (right) */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="sr-only">J&R’s Organic Cleaning Bombs</h1>
            <p className="text-2xl sm:text-3xl font-bold mb-3">
              Welcome to J&R’s Organic Cleaning Bombs
            </p>
            <p className="text-lg sm:text-xl mb-4">
              Eco • Handmade • Safe • Effective
            </p>
            <p className="mb-6">
              Made with simple, organic ingredients. No toxins. No plastic.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-white text-eco-green px-6 py-3 rounded-full font-bold shadow-md hover:bg-gray-100"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/placeholder-product.jpg" alt="Starter Pack (5 Bombs)" className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="font-bold">Starter Pack (6 Bombs)</h3>
            <p>$11.99</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/holiday.jpg" alt="Holiday Kit" className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="font-bold">Holiday Kit</h3>
            <p>$14.99–$19.99</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/placeholder-product.jpg" alt="Subscription Box" className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="font-bold">Monthly Subscription (15 bombs)</h3>
            <p>$29.99</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">What Customers Say</h2>
        <p className="italic">"This Toilet Bomb left my bowl sparkling in 2 minutes!" — David</p>
      </section>
    </div>
  )
}

export default Home
