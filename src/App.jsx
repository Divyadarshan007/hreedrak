import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import VacuumBloodCollectionTubes from './pages/products/vacuum-blood-collection-tubes'
import NonVacuumBloodCollectionTubes from './pages/products/non-vacuum-blood-collection-tubes'
import SingleCapBloodCollectionTubes from './pages/products/single-cap-blood-collection-tubes'
import MicroPediatricTubes from './pages/products/micro-pediatric-tubes'
import ProductDetail from './pages/products/ProductDetail'
import OemServices from './pages/OemServices'
import Contact from './pages/Contact'
import Catalogue from './pages/Catalogue'
import RequestQuote from './pages/RequestQuote'

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
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
