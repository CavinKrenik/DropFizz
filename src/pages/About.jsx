import { Link } from 'react-router-dom'
import SEO from '../seo/SEO'

function About() {
  return (
    <div className="prose max-w-none">
      <SEO
        title="About | J&R’s Cleaning Organic Bombs"
        description="Our small-batch, eco-friendly mission: simple ingredients, plastic-free packaging, and cleaner homes without harsh chemicals."
        url="https://dropfizzers.com/about"
        image="/logo.png"
      />

      {/* Intro text only (no big side image) */}
      <section className="not-prose py-10">
        <div className="container mx-auto bg-white rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4">About J&amp;R’s</h1>
          <p className="mb-4">
            We’re <strong>Jennifer</strong> and <strong>Rocky</strong>—the “J” and “R” behind J&amp;R’s. We started making
            handmade cleaning bombs with one goal: <em>clean safely for our children</em>, <strong>Logan</strong> and <strong>Liam</strong>.
            As parents, we noticed how many harsh chemicals and how much plastic came with “normal” cleaners. We wanted a better way.
          </p>
          <p className="mb-0">
            So we crafted an alternative: <strong>simple, pronounceable ingredients</strong>, small batches, and
            plastic-conscious packaging—made with love so your home sparkles without compromise.
          </p>
        </div>
      </section>

      {/* Our Promise */}
      <section className="not-prose py-6">
        <div className="container mx-auto bg-gradient-to-r from-eco-green to-fizz-blue text-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-3">Our Promise</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Transparent, simple ingredients you can pronounce</li>
            <li>Plastic-conscious, kraft-paper packaging where possible</li>
            <li>Family- and pet-conscious formulas—no harsh chemicals</li>
            <li>Easy, effective cleaning for little hands and growing minds</li>
          </ul>
        </div>
      </section>

      {/* Meet the Family — portrait rows with alternating layout */}
<section className="not-prose py-8">
  <div className="container mx-auto">
    <h2 className="text-2xl font-bold mb-6">Meet the Family</h2>

    <div className="space-y-10">
      {/* Jennifer (image left on desktop) */}
      <article className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-2">
          <div className="rounded-xl overflow-hidden shadow aspect-[3/4]">
            <img
              src="/jen.jpg"
              alt="Jennifer smiling with one of the boys on her shoulders"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-xl font-bold mb-2">Jennifer</h3>
          <p className="text-base">
            Mom, formulator, and label-lover. Keeps scents balanced and ingredients clean.
            Passionate about making home care safe for little hands and curious noses.
          </p>
        </div>
      </article>

      {/* Rocky (image right on desktop) */}
      <article className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-3 order-2 md:order-1">
          <h3 className="text-xl font-bold mb-2">Rocky</h3>
          <p className="text-base">
            Dad, mixing maestro, and packaging tinkerer. Turns ideas into fizz and makes sure
            every batch is consistent, effective, and ready to shine.
          </p>
        </div>
        <div className="md:col-span-2 order-1 md:order-2">
          <div className="rounded-xl overflow-hidden shadow aspect-[3/4]">
            <img
              src="/rocky.jpg"
              alt="Rocky with Logan and Liam exploring outside"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </article>

      {/* Logan & Liam (image left on desktop) */}
      <article className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-2">
          <div className="rounded-xl overflow-hidden shadow aspect-[3/4]">
            <img
              src="/boys.jpg"
              alt="Logan striking a superhero pose while Liam looks on"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-xl font-bold mb-2">Logan &amp; Liam</h3>
          <p className="text-base">
            The reason we started. Quality-control experts and bubble-watchers. If it doesn’t
            fizz or smell great, they’ll let us know!
          </p>
        </div>
      </article>
    </div>
  </div>
</section>


      {/* Why we started */}
      <section>
        <h2 className="text-2xl font-bold mt-4 mb-2">Why We Started</h2>
        <p>
          We wanted cleaning that felt safe around our kids, smelled great, and actually worked. By combining
          baking soda, citric acid, and purposeful essential oils, we get a natural fizz that lifts grime and
          neutralizes odors without harsh residues or overwhelming fragrances.
        </p>
      </section>

      {/* CTA */}
      <section className="not-prose py-8">
        <div className="container mx-auto text-center">
          <Link
            to="/shop"
            className="inline-block bg-eco-green text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-green-700"
          >
            Shop Our Bombs
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
