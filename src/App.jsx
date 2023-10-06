import { Route, Routes } from 'react-router-dom'
import Home from './screen/home/Home'
import About from './screen/about/About'
import Services from './screen/services/Services'
import Blog from './screen/blog/Blog'
import ServicesDetails from './screen/services/ServicesDetails'
import ContactUs from './screen/contact-us/ContactUs'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:slug' element={<ServicesDetails />} />
        <Route path='/blogs&news' element={<Blog />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App