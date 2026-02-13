import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import {
  FaHome,
  FaMapMarkerAlt,
  FaPlane,
  FaHotel,
  FaCalendarAlt,
  FaHeart,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
  FaUser,
} from "react-icons/fa";

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const menuItems = [
  { label: "Dashboard", icon: <FaHome />, path: "/dashboard" },
  { label: "Destinations", icon: <FaMapMarkerAlt />, path: "/dashboard/destinations" },
  { label: "My Trips", icon: <FaPlane />, path: "/dashboard/trips" },
  { label: "Bookings", icon: <FaCalendarAlt />, path: "/dashboard/bookings" },
  { label: "Hotels", icon: <FaHotel />, path: "/dashboard/hotels" },
  { label: "Wishlist", icon: <FaHeart />, path: "/dashboard/wishlist" },
  { label: "Profile", icon: <FaUser />, path: "/dashboard/profile" },
  { label: "Setting", icon: <FaCog />, path: "/dashboard/setting" },
];


  const isActive = (path) => location.pathname === path;

  return (
    <>
      <button
        className={`sidebar-toggle ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen(true)}
        title="Open Menu"
      >
        <FaChevronRight />
      </button>

      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <span className="brand-icon">
              <FaPlane />
            </span>
            {isOpen && <span className="brand-text">TravelX</span>}
          </div>

          <button className="sidebar-close" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${isActive(item.path) ? "active" : ""}`}
              onClick={() => window.innerWidth < 768 && setIsOpen(false)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {isOpen && <span className="sidebar-label">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {isOpen && (
          <div className="sidebar-footer">
            <p>Copyright 2024 TravelX</p>
          </div>
        )}
      </aside>
    </>
  );
}

export default Sidebar;
