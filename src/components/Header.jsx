import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-eco-green text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand text */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          J&R’s Cleaning Organic Bombs
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/shop" className="hover:text-fizz-blue">Shop</Link></li>
            <li><Link to="/about" className="hover:text-fizz-blue">About</Link></li>
            <li><Link to="/how-it-works" className="hover:text-fizz-blue">How It Works</Link></li>
            <li><Link to="/holiday-kits" className="hover:text-fizz-blue">Holiday Kits</Link></li>
            <li><Link to="/subscription" className="hover:text-fizz-blue">Subscription</Link></li>
            <li><Link to="/faq" className="hover:text-fizz-blue">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-fizz-blue">Contact</Link></li>
          </ul>
        </nav>

        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-eco-green px-4 py-2">
          <ul className="flex flex-col space-y-2">
            <li><Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</Link></li>
            <li><Link to="/holiday-kits" onClick={() => setIsMenuOpen(false)}>Holiday Kits</Link></li>
            <li><Link to="/subscription" onClick={() => setIsMenuOpen(false)}>Subscription</Link></li>
            <li><Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}
export default Header
