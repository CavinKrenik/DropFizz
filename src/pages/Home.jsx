import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <section className="text-center py-12 bg-gradient-to-r from-eco-green to-fizz-blue rounded-lg shadow-lg text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to J&R’s Cleaning Organic Bombs</h1>
        <p className="text-lg sm:text-xl mb-6">Eco • Handmade • Safe • Effective</p>
        <p className="mb-6">Made with simple, organic ingredients. No toxins. No plastic.</p>
        <Link to="/shop" className="bg-white text-eco-green px-6 py-3 rounded-full font-bold shadow-md hover:bg-gray-100">Shop Now</Link>
      </section>
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/placeholder-product.jpg" alt="Starter Pack (5 Bombs)" className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="font-bold">Starter Pack (5 Bombs)</h3>
            <p>$11.99</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/placeholder-product.jpg" alt="Holiday Kit" className="w-full h-40 object-cover mb-2 rounded" />
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
      <section className="py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">What Customers Say</h2>
        <p className="italic">"This bomb cleared my drain in 2 minutes!" — Happy Customer</p>
      </section>
    </div>
  )
}
export default Home
