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
import EventDetails from './pages/EventDetails'
import Requirements from './pages/Requirements'
import RequirementsDisplay from './pages/RequirementsDisplay'
import CustomerDisplay from './pages/CustomerDisplay'
import EventsDisplay from './pages/EventsDisplay'
import Dashboard from './components/Dashboard'
import ThankYou from './pages/Thankyou'
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
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
      <Route path='/eventdetails' element={<EventDetails/>}/>
      <Route path='/requirements' element={<Requirements/>}/>
      <Route path='/getrequirements' element={<RequirementsDisplay/>}/>
      <Route path='/getcustomer' element={<CustomerDisplay/>}/>
      <Route path='/geteventdetails' element={<EventsDisplay/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/thankyou' element={<ThankYou/>}/>
      <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="admin-dashboard" element={<AdminDashboard />} />
<Route path="/user-dashboard" element={<UserDashboard />} />
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
