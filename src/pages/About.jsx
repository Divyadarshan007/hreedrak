import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineUserGroup,
  HiOutlineArrowTrendingUp,
} from 'react-icons/hi2'
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
const FONT = '#231F20'
const ACCENT = '#ED1B24'
const YELLOW = '#FDB813'
const GREEN = '#00A650'
const PURPLE = '#993F97'
const GRAY = '#6D6E72'

/* Light tint helper */
const tint = {
  [PRIMARY]: '#EEF3FA',
  [FONT]: '#F0EFEF',
  [ACCENT]: '#FDE8E9',
  [YELLOW]: '#FEF8E7',
  [GREEN]: '#E8F7EF',
  [PURPLE]: '#F5EBF5',
  [GRAY]: '#F3F3F4',
}

/* ── Data ──────────────────────────────────────────────────────── */
const certs = [
  {
    acronym: 'CE',
    name: 'Conformité Européenne',
    issuedBy: 'European Conformity',
    scope: 'Blood collection tubes and lab disposables meet EU safety, health, and environmental protection standards.',
    label: 'CE Marked',
    logo: '/certificates/ce.png',
    bgImg: '/certificates/hreedrak-bioscience-pvt-ltd-ce-1_page-0001.jpg',
    pdf: '/certificates/hreedrak-bioscience-pvt-ltd-ce-1.pdf',
    filename: 'Hreedrak-CE-Certificate.pdf',
  },
  {
    acronym: 'ISO 9001',
    name: 'Quality Management System',
    issuedBy: 'International Organization for Standardization',
    scope: 'Quality management processes for design, manufacture, and supply of blood collection products.',
    label: 'Certified 2015',
    logo: '/certificates/iso-9001.png',
    bgImg: '/certificates/iso-9001_page-0001.jpg',
    pdf: '/certificates/iso-9001.pdf',
    filename: 'Hreedrak-ISO-9001-Certificate.pdf',
  },
  {
    acronym: 'ISO 13485',
    name: 'Medical Devices Quality Management',
    issuedBy: 'International Organization for Standardization',
    scope: 'Quality management system specific to medical devices, ensuring consistent safety and effectiveness.',
    label: 'Certified 2016',
    logo: '/certificates/iso-13485.png',
    bgImg: '/certificates/iso-13485-2016_page-0001.jpg',
    pdf: '/certificates/iso-13485-2016.pdf',
    filename: 'Hreedrak-ISO-13485-Certificate.pdf',
  },
]

const faqs = [
  {
    q: 'What types of products does Hreedrak Bioscience Private Limited offer?',
    a: 'We offer a wide range of blood collection solutions including Vacuum and Non-Vacuum Blood Collection Tubes, Microtainers, Paediatric Tubes, and Urine Containers.',
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
    label: 'Years of Experience',
    value: '29+',
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
const SectionLabel = ({ number, title, centered = false }) => (
  <div className={`flex items-center gap-4 mb-6 ${centered ? 'justify-center' : ''}`}>
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
      style={{ backgroundColor: PRIMARY }}
    >
      <span className="text-white font-black text-xs">{number}</span>
    </div>
    <div>
      <div className={`w-7 h-0.5 mb-1.5 rounded-full ${centered ? 'mx-auto' : ''}`} style={{ backgroundColor: ACCENT }} />
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

const ContactSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="py-12"
  >
    <SectionLabel number="08" title="Contact Us" centered />
    <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl bg-white max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 lg:p-10 space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ color: FONT }}>Get in Touch</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Have questions about our products or need a custom solution? Our team is here to help you with expert guidance.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: tint[PRIMARY] }}>
                <svg className="w-5 h-5" style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div>
                <p className="text-xs uppercase font-bold tracking-wider" style={{ color: GRAY }}>Call Us</p>
                <a href="tel:08048116653" className="text-lg font-bold hover:underline transition-colors" style={{ color: PRIMARY }}>
                  08048116653
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: tint[PRIMARY] }}>
                <svg className="w-5 h-5" style={{ color: PRIMARY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <p className="text-xs uppercase font-bold tracking-wider" style={{ color: GRAY }}>E-mail</p>
                <a href="mailto:hreedrakbioscience@gmail.com" className="text-base font-bold hover:underline break-all transition-colors" style={{ color: PRIMARY }}>
                  hreedrakbioscience@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 lg:p-10 flex flex-col justify-center">
          <p className="font-bold text-base mb-4" style={{ color: FONT }}>
            HREEDRAK BIOSCIENCE PRIVATE LIMITED
          </p>
          <div className="flex gap-3 items-start mb-6">
            <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100">
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
          <a
            href="https://wa.me/919825156800?text=Hello! I'm interested in Hreedrak Bioscience products. Please share more details and pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center text-white text-sm font-bold px-6 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95 shadow-red-500/20"
            style={{ backgroundColor: ACCENT }}
          >
            Send Enquiry Now
          </a>
        </div>
      </div>
    </div>
  </motion.section>
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
      {/* ── Hero Banner ── */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #034DA2 0%, #023585 55%, #231F20 100%)' }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" style={{ backgroundColor: '#ffffff07' }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center relative"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-2" style={{ color: '#A8C4E8' }}>
            HREEDRAK BIOSCIENCE PRIVATE LIMITED
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">About Us</h1>
        </motion.div>
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

          <div className="space-y-24 lg:space-y-32">

            {/* 01 — About Us (Text Left, Image Right) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center overflow-hidden">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <SectionLabel number="01" title="About Us" />
                <div className="space-y-6">
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    <strong>Hreedrak Bioscience</strong> is a forward-thinking <strong>In Vitro Diagnostics (IVD) consumables manufacturer</strong>, committed to advancing healthcare through precision, quality, and innovation.
                  </p>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    With over <strong>29 years of cumulative experience</strong> in the healthcare industry, we bring a strong foundation of technical expertise and manufacturing excellence. Our primary focus lies in <strong>pre-analytical IVD solutions</strong>, particularly blood collection systems that play a critical role in diagnostic accuracy.
                  </p>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    Every product we develop is engineered to deliver <strong>consistency, safety, and performance</strong>, meeting the evolving demands of modern laboratories and healthcare institutions globally.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-[#034DA2]/5 rounded-[2rem] -rotate-2 scale-95 group-hover:rotate-0 transition-transform duration-500" />
                <img
                  src="/about_us_lab.png"
                  alt="Modern Bioscience Laboratory"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </motion.div>
            </section>

            {/* 02 — Mission (Image Left, Text Right) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center overflow-hidden">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative group order-2 lg:order-1"
              >
                <div className="absolute -inset-4 bg-[#ED1B24]/5 rounded-[2rem] rotate-2 scale-95 group-hover:rotate-0 transition-transform duration-500" />
                <img
                  src="/Medical-innovation-in-action.png"
                  alt="Innovation in Action"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <SectionLabel number="02" title="Mission" />
                <div className="space-y-6">
                  <p className="text-lg font-bold leading-relaxed" style={{ color: PRIMARY }}>
                    To develop and deliver high-performance IVD consumables and diagnostic solutions that ensure precision and reliability worldwide.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Upholding the highest standards of quality and compliance",
                      "Enabling healthcare providers with accurate and dependable solutions",
                      "Driving continuous improvement through innovation and technology"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-gray-700">
                        <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                        <span className="text-sm lg:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </section>

            {/* 03 — Vision (Text Left, Image Right) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center overflow-hidden">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <SectionLabel number="03" title="Vision" />
                <div className="space-y-6">
                  <p className="text-lg font-bold leading-relaxed" style={{ color: PRIMARY }}>
                    To establish Hreedrak Bioscience as a globally recognized IVD solutions provider with a comprehensive diagnostics portfolio.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    {[
                      { t: "Innovation", c: PRIMARY },
                      { t: "Evolve", c: GREEN },
                      { t: "Thrive", c: ACCENT }
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                        <span className="font-bold text-sm block" style={{ color: item.c }}>{item.t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-[#00A650]/5 rounded-[2rem] -rotate-2 scale-95 group-hover:rotate-0 transition-transform duration-500" />
                <img
                  src="/Colorful-liquids-in-laboratory-test-tubes.png"
                  alt="Future of Diagnostics"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </motion.div>
            </section>

            {/* 04 — Core Values */}
            <section>
              <SectionLabel number="04" title="Core Values" centered />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    t: 'Quality Without Compromise',
                    d: 'At Hreedrak Bioscience, quality is the foundation of everything we do. We adhere to stringent manufacturing standards and robust quality control systems to ensure that every product delivers consistent performance, safety, and reliability in critical diagnostic applications.',
                    icon: <HiOutlineShieldCheck className="w-10 h-10" />,
                    bg: 'bg-[#E6F4EA]',
                    text: 'text-[#00A650]'
                  },
                  {
                    t: 'Innovation with Purpose',
                    d: 'We believe innovation should solve real-world challenges. Our approach focuses on continuously improving products and processes to meet the evolving needs of modern diagnostics, ensuring better efficiency, accuracy, and user experience.',
                    icon: <HiOutlineLightBulb className="w-10 h-10" />,
                    bg: 'bg-[#E8F0FE]',
                    text: 'text-[#034DA2]'
                  },
                  {
                    t: 'Integrity & Accountability',
                    d: 'We conduct our business with the highest level of integrity, transparency, and responsibility. Every commitment we make is backed by accountability, fostering long-term trust with our partners, customers, and stakeholders.',
                    icon: <HiOutlineScale className="w-10 h-10" />,
                    bg: 'bg-[#FEF7E0]',
                    text: 'text-[#F9AB00]'
                  },
                  {
                    t: 'Customer-Centric Thinking',
                    d: 'Understanding the needs of healthcare professionals is central to our growth. We design and deliver solutions that add real value, improve workflow efficiency, and support better diagnostic outcomes.',
                    icon: <HiOutlineUserGroup className="w-10 h-10" />,
                    bg: 'bg-[#FCE8E6]',
                    text: 'text-[#D93025]'
                  },
                  {
                    t: 'Sustainable Growth',
                    d: 'We are committed to building a future-ready organization through responsible and scalable growth. Our focus is on long-term success while contributing positively to the healthcare ecosystem and society.',
                    icon: <HiOutlineArrowTrendingUp className="w-10 h-10" />,
                    bg: 'bg-[#F3E8FD]',
                    text: 'text-[#A06EE1]'
                  }
                ].map((val, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`group ${val.bg} rounded-3xl p-8 border border-transparent hover:border-white/20 transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/5`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <div className={`${val.text} group-hover:animate-jiggle`}>
                          {val.icon}
                        </div>
                      </div>
                    </div>
                    <h4 className="font-bold text-xl mb-4" style={{ color: FONT }}>{val.t}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{val.d}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 05 — Our Philosophy */}
            <section>
              <SectionLabel number="05" title="Our Philosophy" centered />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="rounded-[3rem] p-10 lg:p-16 relative overflow-hidden text-center" style={{ backgroundColor: tint[PRIMARY] }}
              >
                <h3 className="text-3xl lg:text-5xl font-black mb-12 italic" style={{ color: FONT }}>Innovation. Evolve. Thrive.</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                  {[
                    { t: 'Innovation', d: 'Developing better solutions that enhance accuracy, safety, and efficiency.', c: PRIMARY },
                    { t: 'Evolve', d: 'Adapting and growing with the changing landscape of global standards.', c: ACCENT },
                    { t: 'Thrive', d: 'Sustainable growth contributing to improved healthcare outcomes.', c: GREEN }
                  ].map((item, i) => (
                    <div key={i} className="space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-white shadow-sm mb-4">
                        <span className="font-black text-2xl" style={{ color: item.c }}>{i + 1}</span>
                      </div>
                      <h4 className="font-black text-2xl" style={{ color: item.c }}>{item.t}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed font-medium max-w-xs mx-auto">{item.d}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* 06 — Company at a Glance */}
            <section>
              <SectionLabel number="06" title="Company at a Glance" centered />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {profileItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-5 p-6 rounded-2xl border border-gray-100 transition-all hover:shadow-lg"
                    style={{ backgroundColor: tint[item.color] }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase font-bold tracking-[0.15em] mb-1" style={{ color: GRAY }}>{item.label}</p>
                      <p className="text-base font-bold leading-tight" style={{ color: FONT }}>{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 07 — Our Certifications */}
            <section>
              <SectionLabel number="07" title="Our Certifications" centered />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {certs.map((cert, index) => (
                  <motion.div
                    key={cert.acronym}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-xl hover:-translate-y-1"
                  >

                    {/* Certificate Image Preview - Taller, Full View, Lower Blur */}
                    <div className="relative h-80 bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100">
                      <div className="absolute inset-0 z-0 opacity-40 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-60">
                        {cert.bgImg ? (
                          <img
                            src={cert.bgImg}
                            alt={`${cert.acronym} Certificate Preview`}
                            className="w-full h-full object-contain blur-[0.5px] brightness-100 p-4"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <img
                              src={cert.logo}
                              alt=""
                              className="w-20 h-20 object-contain opacity-20 grayscale"
                            />
                          </div>
                        )}
                      </div>

                      {/* Optional: A small "Preview" badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-2 py-1 rounded bg-white/80 backdrop-blur-sm text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-gray-100">
                          Preview
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="px-8 py-8 flex-1 flex flex-col items-center text-center">
                      {/* Logo and Labels moved here */}
                      <div className="w-20 h-20 rounded-full bg-white border-2 flex items-center justify-center mb-4 p-3 shadow-xl -mt-16 relative z-20 transition-transform duration-500 group-hover:scale-110" style={{ borderColor: PRIMARY }}>
                        <img
                          src={cert.logo}
                          alt={`${cert.acronym} Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-2xl font-black mb-1 tracking-tight" style={{ color: FONT }}>{cert.acronym}</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-4" style={{ color: PRIMARY }}>{cert.label}</span>

                      <div className="mt-auto w-full">
                        <a
                          href={cert.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center text-sm font-bold py-3.5 rounded-xl border-2 transition-all hover:bg-opacity-10"
                          style={{ borderColor: PRIMARY, color: PRIMARY }}
                        >
                          View PDF
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 08 — Contact Us (New Position) */}
            <ContactSection />

            {/* 09 — FAQs */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel number="09" title="Frequently Asked Questions" centered />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </motion.section>

          </div>
        </div>
      </main>

    </div>
  )
}

export default About
