import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import "./App.css";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true); // Corrected typo
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData })); // Dispatch login action if user exists
        } else {
          dispatch(logout()); // Dispatch logout action if no user
        }
      })
      .finally(() => {
        setLoading(false); // Stop loading spinner
      });
  }, [dispatch]); // Added dispatch to dependency array

  return !loading ? (
    <div className=" bg-gray-500 p-5 h-screen flex flex-wrap justify-evenly w-full">
      <div className="w-full">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
