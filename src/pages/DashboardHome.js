import "./DashboardHome.css";

function DashboardHome() {
  return (
    <div className="dashboard-home">
      <h1>Welcome back ✈️</h1>
      <p className="subtitle">Let’s plan your next adventure.</p>

      {/* Stats */}
      <div className="stats">
        <div className="card">
          <h3>Trips</h3>
          <p>3</p>
        </div>

        <div className="card">
          <h3>Bookings</h3>
          <p>2</p>
        </div>

        <div className="card">
          <h3>Hotels</h3>
          <p>4</p>
        </div>

        <div className="card">
          <h3>Wishlist</h3>
          <p>5</p>
        </div>
      </div>

      {/* Upcoming */}
      <div className="upcoming">
        <h2>Upcoming Trip</h2>
        <p>Delhi → Goa</p>
        <span>25 February 2026</span>
      </div>
    </div>
  );
}

export default DashboardHome;
