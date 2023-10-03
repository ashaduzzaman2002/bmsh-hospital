import { Route, Routes } from 'react-router-dom'
import Home from './screen/home/Home'
import About from './screen/about/About'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
    </>
  )
}

export default App