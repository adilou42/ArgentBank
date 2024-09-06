import { Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./Components/FooterComponent/Footer";
import Navbar from "./Components/NavbarComponent/Navbar";
import HomePage from "./Pages/Home/HomePage";
import SignInPage from "./Pages/SignIn/SignInPage";
import ErrorPage from "./Pages/Error/ErrorPage";
import User from "./Components/UserComponent/User";

function App() {
    return (
        <div className="big-div">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/SignIn" element={<SignInPage/>} />
              <Route path="/User" element={<User/>} />
              <Route path="*" element={<ErrorPage/>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
