import { useLayoutEffect, useState } from 'react'
import './App.css'
import AnimatedPage from './components/AnimatedPage'
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

const routes = {
  '/': Home,
  '/about': About,
  '/rooms': Rooms,
  '/activities': Activities,
  '/gallery': Gallery,
  '/blog': Blog,
  '/contact': Contact,
}

function getPath() {
  if (routes[window.location.pathname]) {
    return window.location.pathname
  }

  if (window.location.pathname.startsWith('/blog/')) {
    return window.location.pathname
  }

  if (window.location.pathname.startsWith('/rooms/')) {
    return window.location.pathname
  }

  return '/'
}

function getPage(path) {
  if (routes[path]) {
    return {
      Page: routes[path],
      pageProps: {},
    }
  }

  if (path.startsWith('/blog/')) {
    return {
      Page: BlogDetail,
      pageProps: {
        slug: path.replace('/blog/', ''),
      },
    }
  }

  if (path.startsWith('/rooms/')) {
    return {
      Page: RoomDetail,
      pageProps: {
        slug: path.replace('/rooms/', ''),
      },
    }
  }

  return {
    Page: Home,
    pageProps: {},
  }
}

function App() {
  const [currentPath, setCurrentPath] = useState(getPath)
  const { Page, pageProps } = getPage(currentPath)

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const handleRouteChange = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      setCurrentPath(getPath())
    }

    const handleInternalLink = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return
      }

      const link = event.target.closest('a')

      if (!link || link.target || link.hasAttribute('download')) {
        return
      }

      const url = new URL(link.href)

      if (url.origin !== window.location.origin || url.hash) {
        return
      }

      event.preventDefault()

      if (window.location.pathname !== url.pathname) {
        window.history.pushState({}, '', url.pathname)
        window.dispatchEvent(new PopStateEvent('popstate'))
      }
    }

    window.addEventListener('popstate', handleRouteChange)
    document.addEventListener('click', handleInternalLink)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      document.removeEventListener('click', handleInternalLink)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#F3F0E8] text-[#102C26]">
      <Header key={currentPath} currentPath={currentPath} />
      <AnimatedPage routeKey={currentPath}>
        <Page {...pageProps} />
      </AnimatedPage>
      <Footer />
    </main>
  )
}

export default App
