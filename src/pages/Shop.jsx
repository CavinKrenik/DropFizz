import { Link } from 'react-router-dom'
function Shop() {
  const products = [
    { id: 'toilet', name: 'Toilet Fizz Bombs', price: 2.99, image: '/toilet.jpg' },
    { id: 'sink', name: 'Sink/Drain Deodorizer Bombs', price: 2.99, image: '/sink.jpg' },
    { id: 'mold', name: 'Shower Mold & Mildew Bombs', price: 3.49, image: '/mold.jpg' },
    { id: 'laundry', name: 'Laundry Freshening Bombs', price: 2.99, image: '/laundry.jpg' },
    { id: 'mop', name: 'All-Purpose Mop Bucket Bombs', price: 2.99, image: '/mop.jpg' },
    { id: 'holiday-kit', name: 'Holiday Kit (4–6 pack)', price: 17.99, image: '/holiday.jpg' },
  ]
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Shop Our Organic Bombs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-lg mb-4">${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`} className="bg-eco-green text-white px-4 py-2 rounded-full mr-2">View Details</Link>
            <button onClick={() => console.log('Add to Cart - Integrate Stripe here')} className="bg-fizz-blue text-white px-4 py-2 rounded-full">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Shop
