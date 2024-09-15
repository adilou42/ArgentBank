import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { deleteTokenAction } from "../../Redux/actions/userActions"; // Adjust the path as needed


const Navbar = () => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();


    function signOut() {
        dispatch(deleteTokenAction());
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
            <h1 className="sr-only">Argent Bank</h1>
            <div>
                {user.token ? (
                    <button onClick={signOut}>Sign Out</button>
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
