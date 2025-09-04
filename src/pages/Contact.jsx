import SEO from '../seo/SEO'
import { useForm, ValidationError } from '@formspree/react'

function Contact() {
  const [state, handleSubmit] = useForm("mandlevq") // <-- replace with your Formspree form ID

  if (state.succeeded) {
    return (
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p>Thank you for reaching out! We’ll get back to you soon.</p>
      </div>
    )
  }

  return (
    <div className="prose max-w-none">
      <SEO
        title="Contact | J&R’s Cleaning Organic Bombs"
        description="Get in touch with our team for orders, wholesale, or questions about ingredients and usage."
        url="https://dropfizzers.com/contact"
      />
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="bg-white p-4 rounded-lg shadow-md max-w-md" onSubmit={handleSubmit}>
        <label className="block mb-2 font-bold" htmlFor="name">Name</label>
        <input id="name" type="text" name="name" className="w-full border p-2 rounded mb-4" placeholder="Your name" required />

        <label className="block mb-2 font-bold" htmlFor="email">Email</label>
        <input id="email" type="email" name="email" className="w-full border p-2 rounded mb-4" placeholder="you@example.com" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label className="block mb-2 font-bold" htmlFor="message">Message</label>
        <textarea id="message" name="message" className="w-full border p-2 rounded mb-4" placeholder="How can we help?" rows="5" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" className="bg-eco-green text-white px-6 py-3 rounded-full font-bold shadow-md" disabled={state.submitting}>
          Send
        </button>
      </form>
      <p className="mt-4">Follow us on Instagram, TikTok, and Facebook for fizz demos and promos.</p>
    </div>
  )
}

export default Contact
