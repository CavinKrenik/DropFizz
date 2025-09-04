import SEO from '../seo/SEO'

function Contact() {
  return (
    <div className="prose max-w-none">
      <SEO
        title="Contact | J&R’s Cleaning Organic Bombs"
        description="Get in touch with our team for orders, wholesale, or questions about ingredients and usage."
        url="https://dropfizzers.com/contact"
      />
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="bg-white p-4 rounded-lg shadow-md max-w-md" action="#" method="post">
        <label className="block mb-2 font-bold">Name</label>
        <input type="text" className="w-full border p-2 rounded mb-4" placeholder="Your name" />
        <label className="block mb-2 font-bold">Email</label>
        <input type="email" className="w-full border p-2 rounded mb-4" placeholder="you@example.com" />
        <label className="block mb-2 font-bold">Message</label>
        <textarea className="w-full border p-2 rounded mb-4" placeholder="How can we help?" rows="5"></textarea>
        <button type="submit" className="bg-eco-green text-white px-6 py-3 rounded-full font-bold shadow-md">Send</button>
      </form>
      <p className="mt-4">Follow us on Instagram, TikTok, and Facebook for fizz demos and promos.</p>
    </div>
  )
}
export default Contact
