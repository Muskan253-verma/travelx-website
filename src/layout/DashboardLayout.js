import { Outlet, Link } from "react-router-dom";

function DashboardLayout() {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{ width: "200px", background: "#111", color: "#fff", padding: "20px" }}>
        <h3>Dashboard</h3>
        <p><Link to="/dashboard">Home</Link></p>
        <p><Link to="/dashboard/profile">Profile</Link></p>
        <p><Link to="/dashboard/settings">Settings</Link></p>
      </div>

      {/* Page Content */}
      <div style={{ padding: "20px", flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
