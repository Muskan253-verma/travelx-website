import { BrowserRouter, Routes, Route, useLocation, Router } from "react-router-dom";
import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import DashboardLayout from "./layout/DashboardLayout";

import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Destinations from "./pages/Destinations";
import Trips from "./pages/Trips";
import Bookings from "./pages/Bookings";
import Wishlist from "./pages/Wishlist";
import Hotels from "./pages/Hotels";

import "./App.css";

/* ---------------- HOME PAGE ---------------- */
function HomePage() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

/* ---------------- NAVBAR WRAPPER ---------------- */
function AppContent({ handleSearch, isLoggedIn, setIsLoggedIn }) {

  const location = useLocation();

  // ✅ hide search on auth + dashboard pages
  const hideSearch =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname.startsWith("/dashboard");

  return (
  <>
  
  <Routes>
    {/* Wbsite pages with Navebar */}

  <Route element={<MainLayout handleSearch={handleSearch} hideSearch={hideSearch} isloggedIn={isLoggedIn} />}>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route
    path="/login"
    element={<Login setIsLoggedIn={setIsLoggedIn} />}
  />
  <Route path="/signup" element={<Signup />} />
</Route>

        {/* dashboard nested routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<h2>Welcome to Dashboard Home</h2>} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="trips" element={<Trips />} />
          <Route path="booking" element={<Bookings />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>

 </Routes>
 </>

);

}
/* ---------------- MAIN APP ---------------- */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (text) => {
    setQuery(text);
  };

  return (
    <BrowserRouter>
   <AppContent
  handleSearch={handleSearch}
  isLoggedIn={isLoggedIn}
  setIsLoggedIn={setIsLoggedIn}
/>


    </BrowserRouter>
  );
}

export default App;
