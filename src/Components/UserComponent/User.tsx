import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

import "./User.css";

const User = () => {

    const user = useSelector((state: RootState) => state.user);

    const [isEditing, setIsEditing] = useState(false);

    const [newUsername, setNewUsername] = useState("")

    const token = localStorage.getItem("token")

    async function updateUsername(username: string) {
        const response_user = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
                method: "PUT",
                body: JSON.stringify({
                    "userName": username
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
        if (response_user.ok) {

            alert("Username modified succesfully");
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
    }

    function saveEditUser(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        if (!newUsername)
            alert("New username cannot be empty")
        else 
            updateUsername(newUsername)
    }

    function handleNewUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewUsername(event.target.value);
    }

    function editUser() {
        setIsEditing(true);
    }

    function closeEditUser(event?: React.MouseEvent<HTMLButtonElement>) {
        event?.preventDefault()
        setIsEditing(false);
    }

    return (
        <div className="main bg-dark-user">
            <div className="header">
            {!isEditing ? (
                    <div className="welcome">
                        <h1>
                            Welcome back
                            <br />
                            {user.firstName} {user.lastName}
                        </h1>
                        <button className="edit-button" onClick={editUser}>
                            Edit Name
                        </button>
                    </div>
                ) : (
                    <div className="edit-user">
                        <h1>Edit user info</h1>
                        <form>
                            <div className="input-wrapper-edit">
                                <label htmlFor="username">User name: </label>
                                <input type="text" id="username" placeholder={user.userName} onChange={handleNewUsernameChange} />
                            </div>
                            <div className="input-wrapper-edit disabled">
                                <label htmlFor="firstName">First name: </label>
                                <input type="text" id="firstName" placeholder={user.firstName} />
                            </div>
                            <div className="input-wrapper-edit disabled">
                                <label htmlFor="lastName">Last name: </label>
                                <input type="text" id="lastName" placeholder={user.lastName} />
                            </div>
                            <div className="edit-user-button">
                            <button onClick={saveEditUser}>Save</button>
                            <button onClick={closeEditUser}>Cancel</button>
                        </div>
                        </form>
                    </div>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Checking (x8349)
                    </h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Savings (x6712)
                    </h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Credit Card (x8349)
                    </h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">
                        Current Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
        </div>
    );
};

export default User;
