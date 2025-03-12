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
        <footer className='bg-sky-200 h-12 w-full flex items-center justify-center'>
          <h1>Desenvolvido por Gustavo Magalhães</h1>
        </footer>
      </Router>
    </>
  )
}

export default App
