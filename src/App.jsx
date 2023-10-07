import { Route, Routes } from 'react-router-dom'
import Home from './screen/home/Home'
import About from './screen/about/About'
import Services from './screen/services/Services'
import Blog from './screen/blog/Blog'
import ServicesDetails from './screen/services/ServicesDetails'
import ContactUs from './screen/contact-us/ContactUs'
import Review from './screen/review/Review'
import Gallery from './screen/gallery/Gallery'
import Team from './screen/team/Team'

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
        <Route path='/reviews' element={<Review />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </>
  )
}

export default App