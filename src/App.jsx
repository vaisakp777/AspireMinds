// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Navbar from './components/navbar.jsx'
// import Curriculum from './pages/Curriculum.jsx'
// import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'
// import Footer from './components/footer.jsx'
// import Contact from './pages/Contact.jsx'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// function App() {
//   return (
//     <>
//     <div>

//       <Router>
//         <Navbar />
//             <Routes location={location} key={location.pathname}>
//                 <Route path="" element={<Home />} />
//                 <Route path='/about' element={<About />}/>
//                 <Route path="/services" element={<Curriculum />} />
//                 <Route path="/contact" element={<Contact />} />
      
//             </Routes>
//         <Footer/>
//       </Router>

      
//     </div>
    
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Curriculum from './pages/Curriculum.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Curriculum />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

