import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { deleteTokenAction } from "../../Redux/actions/userActions"; // Adjust the path as needed

const Navbar = () => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    function signOut() {
        // alert('lol')
        dispatch(deleteTokenAction());
        localStorage.clear();
    }

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src="../../../images/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
            </Link>
            {/* <h1 className="sr-only">Argent Bank</h1> */}
            <div>
                {user.token || localStorage.getItem("token") ? (
                    <div className="nav-button-div">
                        <div className="main-nav-button">
                        <FontAwesomeIcon icon={faUser} />
                            Tony
                        </div>

                    <div onClick={signOut} className="main-nav-button">
                        {/* <FontAwesomeIcon icon="arrow-right-from-bracket" /> */}
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <p>Sign Out</p>
                    </div>
                    </div>
                ) : (
                    <Link to="SignIn" className="main-nav-item">
                        <FontAwesomeIcon icon={faUser} />
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
