import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import SEOMeta from '../components/SEO/SEOMeta'

const faqs = [
  {
    q: 'What types of products does Hreedrak Bioscience Private Limited offer?',
    a: 'We offer a wide range of blood collection solutions including Vacuum and Non-Vacuum Blood Collection Tubes, Microtainers, Paediatric Tubes, Advanced Cell-Free DNA Tubes, and Urine Containers.',
  },
  {
    q: 'Do you offer customization for specific product requirements?',
    a: 'Yes, we offer customization to meet specific laboratory and healthcare requirements. Contact our team to discuss your needs.',
  },
  {
    q: "Are Hreedrak Bioscience's products certified?",
    a: 'Yes, our products are certified by CDSCO, and manufactured in a state-of-the-art ISO 7 (Class 10,000) clean room facility.',
  },
  {
    q: 'Can I get assistance with recommendations?',
    a: 'Absolutely. Our expert team is available to guide you in selecting the right products for your laboratory or healthcare facility.',
  },
  {
    q: 'What kind of after-sales support do you provide?',
    a: 'We provide comprehensive after-sales support including product training, technical guidance, and prompt response to quality concerns.',
  },
  {
    q: 'Do you provide training on product usage?',
    a: 'Yes, we offer training sessions to ensure proper product usage and to help healthcare professionals get the best results.',
  },
  {
    q: 'How do you ensure product quality?',
    a: 'We follow stringent quality control processes in our ISO 7 clean room facility and adhere to CDSCO standards to ensure every product meets the highest quality benchmarks.',
  },
  {
    q: 'How can I place an order?',
    a: 'You can place an order by contacting us via email at hreedrakbioscience@gmail.com or calling 08048116653.',
  },
]

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-3 transition-transform ${open ? 'rotate-45' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
          {a}
        </div>
      )}
    </div>
  )
}


/* ── Contact Us Sidebar ──────────────────────────────────────── */
const ContactSidebar = () => (
  <aside className="w-full">
    {/* Contact Us Card */}
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      {/* Card header */}
      <div className="bg-primary px-5 py-4">
        <h3 className="text-white font-bold text-base tracking-wide">Contact Us</h3>
      </div>

      {/* Card body */}
      <div className="bg-white p-5 space-y-4">
        {/* Company name */}
        <p className="font-bold text-gray-900 text-sm leading-snug">
          HREEDRAK BIOSCIENCE PRIVATE LIMITED
        </p>

        {/* Address */}
        <div className="flex gap-3 items-start">
          <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <p className="text-gray-600 text-sm leading-relaxed">
            166, First Floor, SITP-1, RJD Park,<br />
            Ichchhapor, Surat, Gujarat – 394510,<br />
            India
          </p>
        </div>

        {/* Phone */}
        <div className="flex gap-3 items-center">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Call Us</p>
            <a href="tel:08048116653" className="text-primary text-sm font-medium hover:underline">
              08048116653
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-3 items-center">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <div>
            <p className="text-xs text-gray-400 mb-0.5">E-mail</p>
            <a href="mailto:hreedrakbioscience@gmail.com" className="text-primary text-sm font-medium hover:underline break-all">
              hreedrakbioscience@gmail.com
            </a>
          </div>
        </div>

        {/* CTA button */}
        <a
          href="mailto:hreedrakbioscience@gmail.com"
          className="mt-2 block w-full text-center bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          Send Enquiry
        </a>
      </div>
    </div>
  </aside>
)

/* ── Main Component ──────────────────────────────────────────── */
const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="About Us — Blood Collection Tube Manufacturer"
        description="Learn about Hreedrak Bioscience Private Limited, a CDSCO-certified manufacturer of blood collection tubes in Surat, Gujarat. ISO 7 clean room, CE marked, ISO 9001 & 13485 certified."
        canonical="/about"
      />
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-blue-50 border-b border-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 mb-3">
            HREEDRAK BIOSCIENCE PRIVATE LIMITED
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">About Us</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

          {/* ── Two-column layout ── */}
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ── Left: Main Content ── */}
            <div className="flex-1 min-w-0">

              {/* About Text */}
              <section className="mb-8">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Established in the year <strong>2024</strong>,{' '}
                  <strong>HREEDRAK BIOSCIENCE PRIVATE LIMITED</strong> is among the leading and
                  trustworthy organisations in this domain, engaged as{' '}
                  <strong>Manufacturers, Exporters, Wholesaler</strong>, and{' '}
                  <strong>Retailer</strong> of a wide range of medical products. Our offered
                  assortment comprises{' '}
                  <strong>K3 EDTA Vacuum Blood Collection Tubes</strong>,{' '}
                  <strong>K2 EDTA Vacuum Blood Collection Tubes</strong>,{' '}
                  <strong>Clot Activator Vacuum Blood Collection Tubes</strong>,{' '}
                  <strong>Fluoride Vacuum Blood Collection Tubes</strong>,{' '}
                  <strong>Plain Serum Vacuum Blood Collection Tubes</strong>,{' '}
                  <strong>K3 EDTA Single Cap Non-Vacuum Blood Collection Tubes</strong>,{' '}
                  <strong>K2 EDTA Non-Vacuum Blood Collection Tubes</strong>,{' '}
                  <strong>Clot Activator Non-Vacuum Blood Collection Tubes</strong>,{' '}
                  <strong>Double Cap Non-Vacuum Blood Collection Tubes</strong>,{' '}
                  <strong>Clot Activator Single Cap Blood Collection Tubes</strong>, and more.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  All these products are manufactured from supreme grade raw materials using
                  modern tools and technology, and are made as per the industry approved
                  parameters under the supervision of our skilled and experienced workforce.
                  Our offered products are highly demanded across the market for their optimum quality.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Our organisation is growing with a fast rate because of the valuable assistance
                  of our mentor. His management skills, ability to handle crucial situations, and
                  regular motivation have enabled us to achieve a remarkable peak of success in
                  the market.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  At <strong>Hreedrak Bioscience</strong>, our commitment to quality and safety is
                  paramount. Our products are crafted to deliver reliable results, aiding
                  healthcare providers in accurate <strong>diagnosis</strong> and efficient
                  sample management. We are a trusted provider of essential{' '}
                  <strong>medical supplies</strong> for <strong>laboratories</strong> and{' '}
                  <strong>healthcare facilities</strong> across the nation.
                </p>
              </section>

              {/* Business Info Table */}
              <section className="mb-10">
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <table className="w-full text-sm">
                    <tbody>
                      {[
                        { label: 'Nature of Business', value: 'Manufacturers, Exporters, Wholesaler, Retailer' },
                        { label: 'Year of Establishment', value: '2024' },
                        { label: 'Market Covered', value: 'Worldwide' },
                        { label: 'GST No', value: '24AAHCH3979H1ZA' },
                        { label: 'Legal Status of Firm', value: 'Private Limited Company' },
                      ].map((row, i) => (
                        <tr key={row.label} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-200 w-2/5">
                            {row.label}
                          </td>
                          <td className="px-4 py-3 text-gray-600 border-b border-gray-200">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-4">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Find answers to commonly asked questions about our products and services.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {faqs.map((faq) => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </section>

            </div>

            {/* ── Right: Sidebar ── */}
            <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-6">
                <ContactSidebar />
              </div>
            </div>

          </div>
        </div>

        {/* CTA Banner */}
        <section className="py-12 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-white text-lg sm:text-xl font-semibold text-center sm:text-left">
              Our products consist of all aspects of the international materials guidelines!
            </p>
            <a
              href="mailto:hreedrakbioscience@gmail.com"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-primary font-bold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >
              Inquiry
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default About
