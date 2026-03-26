import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import SEOMeta from '../components/SEO/SEOMeta'

/* ── Palette & roles ─────────────────────────────────────────────
   PRIMARY  #034DA2  – section numbers, buttons, links, tags
   FONT     #231F20  – all headings & body text
   ACCENT   #ED1B24  – section lines, left-bar highlights
   YELLOW   #FDB813  – Established badge, Year card icon
   GREEN    #00A650  – Worldwide badge, Market card icon
   PURPLE   #993F97  – Leadership card, Legal Status card icon
   GRAY     #6D6E72  – GST card icon, muted labels
──────────────────────────────────────────────────────────────── */
const PRIMARY = '#034DA2'
const FONT    = '#231F20'
const ACCENT  = '#ED1B24'
const YELLOW  = '#FDB813'
const GREEN   = '#00A650'
const PURPLE  = '#993F97'
const GRAY    = '#6D6E72'

/* Light tint helper */
const tint = {
  [PRIMARY]: '#EEF3FA',
  [FONT]:    '#F0EFEF',
  [ACCENT]:  '#FDE8E9',
  [YELLOW]:  '#FEF8E7',
  [GREEN]:   '#E8F7EF',
  [PURPLE]:  '#F5EBF5',
  [GRAY]:    '#F3F3F4',
}

/* ── Data ──────────────────────────────────────────────────────── */
const certs = [
  {
    acronym: 'CE',
    name: 'Conformité Européenne',
    issuedBy: 'European Conformity',
    scope: 'Blood collection tubes and lab disposables meet EU safety, health, and environmental protection standards.',
    label: 'CE Marked',
    pdf: '/certificates/hreedrak-bioscience-pvt-ltd-ce-1.pdf',
    filename: 'Hreedrak-CE-Certificate.pdf',
  },
  {
    acronym: 'ISO 9001',
    name: 'Quality Management System',
    issuedBy: 'International Organization for Standardization',
    scope: 'Quality management processes for design, manufacture, and supply of blood collection products.',
    label: 'Certified 2015',
    pdf: '/certificates/iso-9001.pdf',
    filename: 'Hreedrak-ISO-9001-Certificate.pdf',
  },
  {
    acronym: 'ISO 13485',
    name: 'Medical Devices Quality Management',
    issuedBy: 'International Organization for Standardization',
    scope: 'Quality management system specific to medical devices, ensuring consistent safety and effectiveness.',
    label: 'Certified 2016',
    pdf: '/certificates/iso-13485-2016.pdf',
    filename: 'Hreedrak-ISO-13485-Certificate.pdf',
  },
]

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

const products = [
  'K3 EDTA Vacuum Blood Collection Tubes',
  'K2 EDTA Vacuum Blood Collection Tubes',
  'Clot Activator Vacuum Blood Collection Tubes',
  'Fluoride Vacuum Blood Collection Tubes',
  'Plain Serum Vacuum Blood Collection Tubes',
  'K3 EDTA Single Cap Non-Vacuum Blood Collection Tubes',
  'K2 EDTA Non-Vacuum Blood Collection Tubes',
  'Clot Activator Non-Vacuum Blood Collection Tubes',
  'Double Cap Non-Vacuum Blood Collection Tubes',
  'Clot Activator Single Cap Blood Collection Tubes',
]

/* Profile cards – each icon colour has a deliberate meaning */
const profileItems = [
  {
    label: 'Nature of Business',
    value: 'Manufacturers, Exporters, Wholesaler, Retailer',
    color: PRIMARY,
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Year of Establishment',
    value: '2024',
    color: YELLOW,
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Market Covered',
    value: 'Worldwide',
    color: GREEN,
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'GST No',
    value: '24AAHCH3979H1ZA',
    color: GRAY,
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: 'Legal Status of Firm',
    value: 'Private Limited Company',
    color: PURPLE,
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

/* ── Sub-components ────────────────────────────────────────────── */
const SectionLabel = ({ number, title }) => (
  <div className="flex items-center gap-4 mb-6">
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
      style={{ backgroundColor: PRIMARY }}
    >
      <span className="text-white font-black text-xs">{number}</span>
    </div>
    <div>
      <div className="w-7 h-0.5 mb-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
      <h2 className="text-xl font-extrabold leading-tight" style={{ color: FONT }}>{title}</h2>
    </div>
  </div>
)

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-xl overflow-hidden border transition-colors"
      style={open
        ? { borderColor: PRIMARY + '40', backgroundColor: tint[PRIMARY] }
        : { borderColor: '#E5E7EB', backgroundColor: '#fff' }
      }
    >
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium transition-colors"
        style={{ color: FONT }}
        onClick={() => setOpen(!open)}
      >
        <span className="pr-4">{q}</span>
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
          style={open
            ? { backgroundColor: PRIMARY, color: '#fff' }
            : { backgroundColor: '#F3F4F6', color: '#9CA3AF' }
          }
        >
          <svg className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div
          className="px-5 pb-4 text-sm text-gray-600 leading-relaxed pt-3"
          style={{ borderTop: `1px solid ${PRIMARY}20` }}
        >
          {a}
        </div>
      )}
    </div>
  )
}

const ContactSidebar = () => (
  <aside className="w-full">
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <div className="px-5 py-4" style={{ backgroundColor: PRIMARY }}>
        <h3 className="text-white font-bold text-base tracking-wide">Contact Us</h3>
      </div>
      <div className="bg-white p-5 space-y-4">
        <p className="font-bold text-sm leading-snug" style={{ color: FONT }}>
          HREEDRAK BIOSCIENCE PRIVATE LIMITED
        </p>
        <div className="flex gap-3 items-start">
          <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: tint[PRIMARY] }}>
            <svg className="w-4 h-4" style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="flex gap-3 items-center">
          <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: tint[PRIMARY] }}>
            <svg className="w-4 h-4" style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <div>
            <p className="text-xs mb-0.5" style={{ color: GRAY }}>Call Us</p>
            <a href="tel:08048116653" className="text-sm font-medium hover:underline" style={{ color: PRIMARY }}>
              08048116653
            </a>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: tint[PRIMARY] }}>
            <svg className="w-4 h-4" style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <div>
            <p className="text-xs mb-0.5" style={{ color: GRAY }}>E-mail</p>
            <a href="mailto:hreedrakbioscience@gmail.com" className="text-sm font-medium hover:underline break-all" style={{ color: PRIMARY }}>
              hreedrakbioscience@gmail.com
            </a>
          </div>
        </div>
        <a
          href="mailto:hreedrakbioscience@gmail.com"
          className="mt-2 block w-full text-center text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: ACCENT }}
        >
          Send Enquiry
        </a>
      </div>
    </div>
  </aside>
)

/* ── Main Component ────────────────────────────────────────────── */
const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="About Us — Blood Collection Tube Manufacturer"
        description="Learn about Hreedrak Bioscience Private Limited, a CDSCO-certified manufacturer of blood collection tubes in Surat, Gujarat. ISO 7 clean room, CE marked, ISO 9001 & 13485 certified."
        canonical="/about"
      />
      <Navbar />

      {/* ── Hero Banner ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, #023585 55%, ${FONT} 100%)` }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" style={{ backgroundColor: '#ffffff07' }} />
        <div className="absolute bottom-0 left-10 w-52 h-52 rounded-full translate-y-1/2 pointer-events-none" style={{ backgroundColor: '#ffffff05' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: '#A8C4E8' }}>
            Hreedrak Bioscience Private Limited
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            About Us
          </h1>
          <p className="text-sm max-w-md mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            We are a trusted provider of essential medical supplies for laboratories and healthcare facilities across the nation.
          </p>

          {/* Stat badges — accent dots use meaningful palette colours */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Established', value: '2024',             dot: YELLOW  },
              { label: 'Reach',       value: 'Worldwide',        dot: GREEN   },
              { label: 'Compliance',  value: 'CE Marked',        dot: ACCENT  },
              { label: 'Certified',   value: 'ISO 9001 & 13485', dot: PURPLE  },
            ].map((s) => (
              <div
                key={s.label}
                className="border rounded-lg px-4 py-2.5 min-w-[110px]"
                style={{ borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                <p className="text-[10px] uppercase tracking-wider leading-none mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: s.dot }} />
                  <p className="text-white font-bold text-xs leading-none">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Breadcrumb ── */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs" style={{ color: GRAY }}>
            <Link to="/" className="hover:underline transition-colors" style={{ color: GRAY }}>Home</Link>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-medium" style={{ color: FONT }}>About Us</span>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ── Left: Main Content ── */}
            <div className="flex-1 min-w-0 space-y-12">

              {/* 01 — Our Story */}
              <section>
                <SectionLabel number="01" title="Our Story" />
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  Established in the year <strong>2024</strong>,{' '}
                  <strong>HREEDRAK BIOSCIENCE PRIVATE LIMITED</strong> is among the leading and
                  trustworthy organisations in this domain, engaged as{' '}
                  <strong>Manufacturers, Exporters, Wholesaler</strong>, and{' '}
                  <strong>Retailer</strong> of a wide range of medical products. Our offered
                  assortment comprises:
                </p>
                {/* Product tags — primary blue, uniform */}
                <div className="flex flex-wrap gap-2">
                  {products.map((product) => (
                    <span
                      key={product}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
                      style={{ backgroundColor: tint[PRIMARY], borderColor: '#A8C4E8', color: PRIMARY }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: PRIMARY }} />
                      {product}
                    </span>
                  ))}
                </div>
              </section>

              {/* 02 — Manufacturing Excellence */}
              <section>
                <SectionLabel number="02" title="Manufacturing Excellence" />
                <div className="rounded-r-xl p-5 border-l-4" style={{ backgroundColor: tint[PRIMARY], borderLeftColor: PRIMARY }}>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    All these products are manufactured from supreme grade raw materials using
                    modern tools and technology, and are made as per the industry approved
                    parameters under the supervision of our skilled and experienced workforce.
                    Our offered products are highly demanded across the market for their{' '}
                    <strong>optimum quality</strong>.
                  </p>
                </div>
              </section>

              {/* 03 — Leadership & Growth */}
              <section>
                <SectionLabel number="03" title="Leadership &amp; Growth" />
                {/* Navy card — purple accent used intentionally here */}
                <div className="rounded-xl p-6 relative overflow-hidden" style={{ backgroundColor: FONT }}>
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ backgroundColor: PURPLE + '22' }} />
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: PURPLE }}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: PURPLE }}>
                      From Our Leadership
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our organisation is growing with a fast rate because of the valuable assistance
                    of our mentor. His management skills, ability to handle crucial situations, and
                    regular motivation have enabled us to achieve a remarkable peak of success in
                    the market.
                  </p>
                </div>
              </section>

              {/* 04 — Our Commitment */}
              <section>
                <SectionLabel number="04" title="Our Commitment" />
                {/* Accent red left bar */}
                <div className="flex gap-4">
                  <div className="w-1 flex-shrink-0 rounded-full self-stretch" style={{ backgroundColor: ACCENT }} />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    At <strong>Hreedrak Bioscience</strong>, our commitment to quality and safety is
                    paramount. Our products are crafted to deliver reliable results, aiding
                    healthcare providers in accurate <strong>diagnosis</strong> and efficient
                    sample management. We are a trusted provider of essential{' '}
                    <strong>medical supplies</strong> for <strong>laboratories</strong> and{' '}
                    <strong>healthcare facilities</strong> across the nation.
                  </p>
                </div>
              </section>

              {/* 05 — Company at a Glance */}
              <section>
                <SectionLabel number="05" title="Company at a Glance" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profileItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-xl p-4 border transition-colors"
                      style={{ backgroundColor: tint[item.color], borderColor: item.color + '30' }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: GRAY }}>{item.label}</p>
                        <p className="text-sm font-semibold leading-snug" style={{ color: FONT }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 06 — Our Certifications */}
              <section>
                <SectionLabel number="06" title="Our Certifications" />
                <p className="text-sm mb-6 -mt-2" style={{ color: GRAY }}>
                  Our products and quality systems are certified by internationally recognised standards bodies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {certs.map((cert) => (
                    <div key={cert.acronym} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                      <div className="px-6 py-8 flex flex-col items-center text-center" style={{ backgroundColor: FONT }}>
                        <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center mb-4" style={{ borderColor: PRIMARY }}>
                          <svg className="w-7 h-7" style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <span className="text-2xl font-extrabold text-white mb-1">{cert.acronym}</span>
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: PRIMARY }}>{cert.label}</span>
                      </div>
                      <div className="px-6 py-5 flex-1 flex flex-col">
                        <h3 className="text-base font-bold mb-1" style={{ color: FONT }}>{cert.name}</h3>
                        <p className="text-xs font-medium mb-3" style={{ color: PRIMARY }}>Issued by: {cert.issuedBy}</p>
                        <p className="text-sm leading-relaxed flex-1" style={{ color: GRAY }}>{cert.scope}</p>
                        <div className="flex gap-3 mt-6">
                          <a
                            href={cert.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center text-sm font-semibold py-2.5 rounded border transition-colors"
                            style={{ borderColor: PRIMARY, color: PRIMARY, backgroundColor: 'transparent' }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = tint[PRIMARY]}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                          >
                            View PDF
                          </a>
                          <a
                            href={cert.pdf}
                            download={cert.filename}
                            className="flex-1 text-center text-white text-sm font-semibold py-2.5 rounded transition-opacity hover:opacity-90 flex items-center justify-center gap-1.5"
                            style={{ backgroundColor: PRIMARY }}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-white border border-gray-200 rounded-xl px-6 py-5 flex items-start gap-4">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm leading-relaxed" style={{ color: GRAY }}>
                    All certificates are issued to{' '}
                    <strong style={{ color: FONT }}>Hreedrak Bioscience Private Limited</strong>.
                    For verification or enquiries regarding our certifications, please{' '}
                    <Link to="/contact" className="hover:underline" style={{ color: PRIMARY }}>contact us</Link>.
                  </p>
                </div>
              </section>

              {/* 07 — FAQs */}
              <section>
                <SectionLabel number="07" title="Frequently Asked Questions" />
                <p className="text-sm mb-6 -mt-2" style={{ color: GRAY }}>
                  Find answers to commonly asked questions about our products and services.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
      </main>

      <Footer />
    </div>
  )
}

export default About
