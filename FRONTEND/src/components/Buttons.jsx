import '../assets/styles/Buttons.css'
import { Link } from 'react-router-dom';
function Buttons(){
    return(
        <>
         <div className="index-buttons">
  <button className="index-btn1"><i className="fa-solid fa-user"></i> <Link to="/register">Register</Link> </button>
  <button className="index-btn2"><i class="fa-solid fa-right-to-bracket"></i> <Link to="/login">Login</Link>  </button>
 </div>
        
        
        </>
    )
}

export default Buttons;