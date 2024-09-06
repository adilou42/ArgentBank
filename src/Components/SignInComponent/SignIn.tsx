import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SignIn.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }
    async function handleSubmit() {
        // console.log(username);
        // console.log(password);

            const emailValue = username
            const passwordValue = password
            console.log(emailValue)
            const response = await fetch(
                "http://localhost:3001/api/v1/user/login",
                {
                    method: "POST", // *GET, POST, PUT, DELETE, etc.

                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: emailValue,
                        password: passwordValue,
                    }),
                }
            );
            const data = await response.json();
            console.log('first', data)
            if (response.ok) {
                alert("success")
                localStorage.setItem("token", data.token);
                // window.location.href = "index.html";
            } else {
                switch (response.status) {
                    case 400:
                        alert("Invalid fields");
                        break;
                    // case 401:
                    //     alert("Incorrect password");
                    //     break;
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
                            value={username}
                            id="username"
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
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
                    {/* </Link> */}
                </form>
            </section>
        </main>
    );
};

export default SignIn;
