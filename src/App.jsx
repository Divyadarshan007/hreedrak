import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import VacuumBloodCollectionTubes from './pages/products/vacuum-blood-collection-tubes'
import NonVacuumBloodCollectionTubes from './pages/products/non-vacuum-blood-collection-tubes'
import SingleCapBloodCollectionTubes from './pages/products/single-cap-blood-collection-tubes'
import ProductDetail from './pages/products/ProductDetail'
import OemServices from './pages/OemServices'
import Contact from './pages/Contact'
import Certificates from './pages/Certificates'
import Catalogue from './pages/Catalogue'
import RequestQuote from './pages/RequestQuote'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/vacuum-blood-collection-tubes" element={<VacuumBloodCollectionTubes />} />
        <Route path="/products/non-vacuum-blood-collection-tubes" element={<NonVacuumBloodCollectionTubes />} />
        <Route path="/products/single-cap-blood-collection-tubes" element={<SingleCapBloodCollectionTubes />} />
        <Route path="/products/:categorySlug/:productSlug" element={<ProductDetail />} />
        <Route path="/oem-services" element={<OemServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/request-quote" element={<RequestQuote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
