import '../assets/styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark p-4 navbar-style">
   <div className="container-fluid">
    <a className="navbar-brand navbar-name" href="#">EVENTENT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav d-flex gap-3 list-items">
        <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
        <Link to='/services' className="nav-link" >Services</Link>
        <Link to='/work' className="nav-link" >Our Work</Link>
        <Link to='/about' className="nav-link" >About Us</Link>
        <Link to='/contact' className="nav-link" >Contact</Link>
        <button className='navbar-btn'> <Link to="/event">Plan Your Event</Link></button>
      </div>
       
           
    
    
       
    </div>
  </div>
</nav>
        
        </>
    )
}

export default Navbar;