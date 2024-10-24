import { Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./Components/FooterComponent/Footer";
import Navbar from "./Components/NavbarComponent/Navbar";
import HomePage from "./Pages/Home/HomePage";
import SignInPage from "./Pages/SignIn/SignInPage";
import User from "./Components/UserComponent/User";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ErrorPage from "./Pages/Error/ErrorPage";

function App() {
    return (
        <Provider store={store}>
            <div className="big-div">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/SignIn" element={<SignInPage />} />
                    <Route path="/User" element={<User />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
