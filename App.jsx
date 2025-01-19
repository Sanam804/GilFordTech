import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Error from './Error'
import AdminHome from './Admin/AdminHome'
export default function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/admin' element={<AdminHome/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}
