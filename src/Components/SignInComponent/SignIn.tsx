import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SignIn.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { TokenAction } from "../../Redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function setTokenStore(token: string) {
        dispatch(TokenAction(token));
        localStorage.setItem("token", token)
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
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
                            id="username"
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button
                        className="sign-in-button"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
};

export default SignIn;
