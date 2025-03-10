import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/articles' element={<Articles/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
