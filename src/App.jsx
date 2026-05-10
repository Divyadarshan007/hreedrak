import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import Layout from './components/Layout/Layout'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const VacuumBloodCollectionTubes = lazy(() => import('./pages/products/vacuum-blood-collection-tubes'))
const NonVacuumBloodCollectionTubes = lazy(() => import('./pages/products/non-vacuum-blood-collection-tubes'))
const SingleCapBloodCollectionTubes = lazy(() => import('./pages/products/single-cap-blood-collection-tubes'))
const MicroPediatricTubes = lazy(() => import('./pages/products/micro-pediatric-tubes'))
const ProductDetail = lazy(() => import('./pages/products/ProductDetail'))
const OemServices = lazy(() => import('./pages/OemServices'))
const Contact = lazy(() => import('./pages/Contact'))
const Catalogue = lazy(() => import('./pages/Catalogue'))
const RequestQuote = lazy(() => import('./pages/RequestQuote'))

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="min-h-[40vh]" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/vacuum-blood-collection-tubes" element={<VacuumBloodCollectionTubes />} />
            <Route path="/products/non-vacuum-blood-collection-tubes" element={<NonVacuumBloodCollectionTubes />} />
            <Route path="/products/single-cap-blood-collection-tubes" element={<SingleCapBloodCollectionTubes />} />
            <Route path="/products/micro-pediatric-tubes" element={<MicroPediatricTubes />} />
            <Route path="/products/:categorySlug/:productSlug" element={<ProductDetail />} />
            <Route path="/oem-services" element={<OemServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/request-quote" element={<RequestQuote />} />

            {/* 404 Fallback - Redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
