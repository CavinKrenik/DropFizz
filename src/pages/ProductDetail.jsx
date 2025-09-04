import { useParams } from 'react-router-dom'
import SEO from '../seo/SEO'

const PRODUCT_DATA = {
  toilet: { name: 'Toilet Fizz Bombs', description: 'Drop one in your toilet for a natural fizz that helps clean and deodorize.', ingredients: 'Baking soda, citric acid, peppermint essential oil.', price: 2.99, image: '/toilet.jpg' },
  sink: { name: 'Sink/Drain Deodorizer Bombs', description: 'Freshen smelly drains and disposals with a satisfying fizz.', ingredients: 'Baking soda, citric acid, lemon essential oil.', price: 2.99, image: '/sink.jpg' },
  mold: { name: 'Shower Mold & Mildew Bombs', description: 'Tea tree powered fizz to help lift mildew and soap scum.', ingredients: 'Baking soda, borax (optional), tea tree essential oil.', price: 3.49, image: '/mold.jpg' },
  laundry: { name: 'Laundry Freshening Bombs', description: 'Boost freshness for gym clothes and towels.', ingredients: 'Washing soda, baking soda, lavender essential oil.', price: 2.99, image: '/laundry.jpg' },
  mop: { name: 'All-Purpose Mop Bucket Bombs', description: 'Drop in a bucket for whole-home floors and surfaces.', ingredients: 'Baking soda, citric acid, eucalyptus essential oil.', price: 2.99, image: '/mop.jpg' },
  'holiday-kit': { name: 'Holiday Kit (4–6 pack)', description: 'Festive scents perfect for gifting.', ingredients: 'Assorted: peppermint, pine, cinnamon, citrus.', price: '4.99–6.99–15.99', image: '/holiday.jpg' },
  monthly: { name: 'Variety 15 count', description: 'Variety pack of 15 for a months worth of cleaning.', ingredients: 'Washing soda, baking soda, lavender essential oil.', price: 29.99, image: '/monthly.jpg' },
}

function ProductDetail() {
  const { id } = useParams()
  const product = PRODUCT_DATA[id] || { name: 'Product', description: 'Details coming soon.', ingredients: '', price: 0, image: '/placeholder-product.jpg' }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <SEO
        title={`${product.name} | J&R’s Cleaning Organic Bombs`}
        description={product.description}
        image={product.image}
        url={`https://dropfizzers.com/product/${id}`}
      />

      <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl mb-4">
          {typeof product.price === 'number'
            ? `$${product.price.toFixed(2)}`
            : `$${product.price}`}
        </p>
        <p className="mb-4">{product.description}</p>
        {product.ingredients && (<>
          <h2 className="font-bold mb-2">Ingredients</h2>
          <p className="mb-4">{product.ingredients}</p>
        </>)}
        <h2 className="font-bold mb-2">Directions</h2>
        <p className="mb-4">Drop → Fizz → Scrub lightly.</p>
        <h2 className="font-bold mb-2">Safety</h2>
        <p className="mb-6">For cleaning use only. Keep out of reach of children & pets. Avoid eye contact.</p>
        <select className="mb-4 p-2 border rounded" aria-label="Select quantity">
          <option>Quantity: 1</option>
          <option>Quantity: 3</option>
          <option>Quantity: 6</option>
        </select>
        <button onClick={() => console.log('Add to Cart - Integrate Stripe here')} className="bg-eco-green text-white px-6 py-3 rounded-full font-bold shadow-md">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetail
