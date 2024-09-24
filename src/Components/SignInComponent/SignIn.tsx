import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SignIn.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { TokenAction } from "../../Redux/actions/userActions"; // Adjust the path as needed
import { RootState } from "../../Redux/store";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user); // Get counter from Redux store
    const dispatch = useDispatch();

    function setTokenStore(token: string) {
        dispatch(TokenAction(token));
        // console.log(token)
        localStorage.setItem("token", token)
    }

    const [username, setUsername] = useState("tony@stark.com");
    const [password, setPassword] = useState("password123");


    function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function checkToken() {
        console.log("TokenUser: ", user);
        console.log("TokenLocal: ", localStorage.getItem("token"));
    }

    function deleteToken() {
        localStorage.clear()
    }

    async function handleSubmit() {
        const emailValue = username;
        const passwordValue = password;
        const response_login = await fetch(
            "http://localhost:3001/api/v1/user/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailValue,
                    password: passwordValue,
                }),
            }
        );
        const data = await response_login.json();
        if (response_login.ok) {
            console.log('yoo',data)
            // alert("success");
            setTokenStore(data.body.token);
            navigate("/User")
        } else {
            switch (response_login.status) {
                case 400:
                    alert("Invalid fields");
                    break;
                default:
                    alert("An error occurred");
                    break;
            }
        }
        return data;
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUser} />

                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            value="tony@stark.com"
                            // value="steve@rogers.com"
                            id="username"
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value="password123"
                            // value="password456"
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <a href="./user.html" className="sign-in-button">
                        Sign In
                    </a> */}
                    {/* <Link to="/User"> */}
                    <button
                        className="sign-in-button"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                    <button
                        className="sign-in-button"
                        type="button"
                        onClick={deleteToken}
                    >
                        delete Token
                    </button>
                    <button
                        className="sign-in-button"
                        type="button"
                        onClick={checkToken}
                    >
                        check Token
                    </button>
                    {/* </Link> */}
                </form>
            </section>
        </main>
    );
};

export default SignIn;
