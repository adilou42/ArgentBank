import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { deleteUserAction, userAction } from "../../Redux/actions/userActions"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate()
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const token = localStorage.getItem("token");

    function setUserStore(firstname: string, lastname: string, username: string) {
        dispatch(userAction(firstname, lastname, username))
    }

    function signOut() {
        // alert('lol')
        dispatch(deleteUserAction());
        localStorage.clear();
        navigate("/")
    }
    async function getUserProfile() {
        const response_user = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
                method: "POST",

                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        const data = await response_user.json();
        if (response_user.ok) {
            // console.log("data: ", data);
            // alert("success");
            setUserStore(data.body.firstName, data.body.lastName, data.body.userName);
        } else {
            switch (response_user.status) {
                case 400:
                    console.log("Invalid fields");
                    break;
                default:
                    console.log("An error occurred");
                    break;
            }
        }
        // console.log("user: ", user);
    }
    getUserProfile()

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
            {/* <button>
                check user
            </button> */}
            <div>
                {user.token || token ? (
                    <div className="nav-button-div">
                        <Link to="User" className="main-nav-item">
                            <FontAwesomeIcon icon={faUser} />
                            {user.userName}
                        </Link> 

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
