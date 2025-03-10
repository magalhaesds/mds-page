import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Router> 
        <Header/>
        <Navbar/>
        <main className='p-4'>
          <Routes>
            <Route path='/mds-page/home' element={<Home/>} />
            <Route path='/mds-page/about' element={<About/>} />
            <Route path='/mds-page/articles' element={<Articles/>} />
            <Route path='/mds-page/contact' element={<Contact/>} />
          </Routes>
        </main>
        <footer className='bg-sky-200 mx-auto h-12 w-64 shadow-md
        rounded-lg items-center justify-center flex'>
          <h1 className=''>developed by MagalhaesDS</h1>
        </footer>
      </Router>
    </>
  )
}

export default App
