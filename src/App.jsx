import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Technologies from './pages/Technologies.jsx'
import Materials from './pages/Materials.jsx'
import Process from './pages/Process.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
