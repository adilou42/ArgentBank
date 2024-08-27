import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';


const Navbar = () => {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src="../../../images/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        {/* <h1 className="sr-only">Argent Bank</h1> */}
      </a>
      <div>
        <a className="main-nav-item" href="./sign-in.html">
        <FontAwesomeIcon icon={faUser} />
          Sign In
        </a>
      </div>
    </nav>
  )
}

export default Navbar