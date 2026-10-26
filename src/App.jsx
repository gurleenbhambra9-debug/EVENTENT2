import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Services from './pages/Services'
import Buttons from './components/Buttons'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Event from './pages/Event'
import Customer from './pages/Customer'
function App() {
 

  return (
    <>
    <Buttons/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/event' element={<Event/>}/>
      <Route path='/customer' element={<Customer/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
