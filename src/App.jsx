import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AnimatedPage from './components/AnimatedPage'
import FloatingContact from './components/FloatingContact'
import Footer from './components/Footer'
import Header from './components/Header'

import About from './pages/About/index.jsx'
import Activities from './pages/Activities/index.jsx'
import Blog from './pages/Blog/index.jsx'
import BlogDetail from './pages/Blog/BlogDetail.jsx'
import Contact from './pages/Contact/index.jsx'
import Gallery from './pages/Gallery/index.jsx'
import Home from './pages/Home/index.jsx'
import RoomDetail from './pages/Rooms/RoomDetail.jsx'
import Rooms from './pages/Rooms/index.jsx'

function AppLayout() {
  const location = useLocation()

  return (
    <main className="min-h-screen bg-[#F3F0E8] text-[#102C26]">
      <Header currentPath={location.pathname} />

      <AnimatedPage routeKey={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<RoomDetail />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatedPage>

      <Footer />
      <FloatingContact />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#102C26',
            color: '#F3F0E8',
            borderRadius: '12px',
            padding: '14px 18px',
            fontSize: '14px',
          },
        }}
      />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App