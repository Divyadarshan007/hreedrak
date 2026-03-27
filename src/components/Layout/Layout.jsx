import Navbar from '../Navbar/Navbar'
import Testimonials from '../Testimonials/Testimonials'
import Certifications from '../Certifications/Certifications'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      {children}
      <Certifications />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Layout
