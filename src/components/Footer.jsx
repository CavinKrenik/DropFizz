import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="bg-kraft-brown py-6 text-center shadow-inner">
      <div className="container mx-auto px-4">
        <p className="text-sm mb-2">Handmade with Goodness in [Auburn, Washington]</p>
        <nav aria-label="Footer">
          <ul className="flex justify-center space-x-4 mb-2">
            <li><Link to="/shop" className="hover:text-eco-green">Shop</Link></li>
            <li><Link to="/about" className="hover:text-eco-green">About</Link></li>
            <li><Link to="/subscription" className="hover:text-eco-green">Subscription</Link></li>
            <li><Link to="/contact" className="hover:text-eco-green">Contact</Link></li>
          </ul>
        </nav>
        <p className="text-sm">Follow us: <a href="#" className="hover:text-eco-green">Instagram</a> | <a href="#" className="hover:text-eco-green">TikTok</a> | <a href="#" className="hover:text-eco-green">Facebook</a></p>
      </div>
    </footer>
  )
}
export default Footer
