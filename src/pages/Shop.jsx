import { Link } from 'react-router-dom'
import SEO from '../seo/SEO'

function Shop() {
  const products = [
    { id: 'toilet', name: 'Toilet Fizz Bombs', price: 2.99, image: '/toilet.jpg' },
    { id: 'sink', name: 'Sink/Drain Deodorizer Bombs', price: 2.99, image: '/sink.jpg' },
    { id: 'mold', name: 'Shower Mold & Mildew Bombs', price: 3.49, image: '/mold.jpg' },
    { id: 'laundry', name: 'Laundry Freshening Bombs', price: 2.99, image: '/laundry.jpg' },
    { id: 'mop', name: 'All-Purpose Mop Bucket Bombs', price: 2.99, image: '/mop.jpg' },
    { id: 'holiday-kit', name: 'Holiday Kit (12 pack)', price: 23.99, image: '/holiday.jpg' },
    { id: 'monthly', name: 'Monthly (15 pack)', price: 29.99, image: '/monthly.jpg' },
  ]

  return (
    <div>
      <SEO
        title="Shop | J&R’s Cleaning Organic Bombs"
        description="Browse toilet fizz bombs, drain fresheners, mold & mildew bombs, laundry refreshers, and holiday kits."
        url="https://dropfizzers.com/shop.com/shop"
      />

      <h1 className="sr-only">Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-lg mb-4">
              {typeof product.price === 'number'
                ? `$${product.price.toFixed(2)}`
                : `$${product.price}`}
            </p>
            <Link to={`/product/${product.id}`} className="bg-eco-green text-white px-4 py-2 rounded-full mr-2">View Details</Link>
            <button onClick={() => console.log('Add to Cart - Integrate Stripe here')} className="bg-fizz-blue text-white px-4 py-2 rounded-full">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
