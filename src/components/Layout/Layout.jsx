import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Testimonials from '../Testimonials/Testimonials'
import Certifications from '../Certifications/Certifications'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  const location = useLocation()
  const isCataloguePage = location.pathname === '/catalogue'

  return (
    <div className="overflow-x-clip">
      {!isCataloguePage && <Navbar />}
      {children}
      {!isCataloguePage && (
        <>
          <Certifications />
          {/* <Testimonials /> */}
          <Footer />
        </>
      )}
    </div>
  )
}

export default Layout
