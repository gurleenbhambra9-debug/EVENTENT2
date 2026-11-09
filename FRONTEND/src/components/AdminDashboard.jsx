

import { useEffect, useState } from "react";
import API from "../Api/Api";
import "../assets/styles/Dashboard.css";

import CustomerDisplay from "../pages/CustomerDisplay";
import EventsDisplay from "../pages/EventsDisplay";
import RequirementsDisplay from "../pages/RequirementsDisplay";

function AdminDashboard() {

    const [adminData, setAdminData] = useState({
        totalUsers: 0,
        totalEnquiries: 0,
        users: []
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const admin = JSON.parse(localStorage.getItem("user") || "{}");

    useEffect(() => {

        const fetchAdminDashboard = async () => {

            try {

                const response = await API.get(
                    "/api/admin/dashboard",
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );

                setAdminData(response.data.data || {
                    totalUsers: 0,
                    totalEnquiries: 0,
                    users: []
                });

            } catch (err) {

                setError(
                    err.response?.data?.message ||
                    "Unable to load admin dashboard."
                );

            } finally {

                setLoading(false);

            }

        };

        fetchAdminDashboard();

    }, []);

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href = "/login";

    };

    if (loading) {
        return (
            <div className="dashboard-message">
                <h3>Loading admin dashboard...</h3>
            </div>
        );
    }

    if (error) {
        return (
            <div className="dashboard-message">
                <p>{error}</p>
            </div>
        );
    }

    return (

        <div className="dashboard-layout">

            {/* SIDEBAR */}

            <aside className="dashboard-sidebar">

                <div className="dashboard-logo">
                    <span>EVENT</span>ENT
                    <small>ADMINISTRATION PANEL</small>
                </div>

                <p className="sidebar-heading">MENU</p>

                <nav className="dashboard-nav">

                    <a href="#overview" className="nav-item active">
                        <i className="fas fa-chart-pie"></i>
                        Overview
                    </a>

                    <a href="#users" className="nav-item">
                        <i className="fas fa-users"></i>
                        Users
                    </a>

                    <a href="#customers" className="nav-item">
                        <i className="fas fa-user-friends"></i>
                        Customers
                    </a>

                    <a href="#events" className="nav-item">
                        <i className="fas fa-calendar-alt"></i>
                        Events
                    </a>

                    <a href="#requirements" className="nav-item">
                        <i className="fas fa-clipboard-list"></i>
                        Requirements
                    </a>

                </nav>

                {/* ADMIN PROFILE */}

                <div className="sidebar-bottom">

                    <div className="sidebar-admin">

                        <div className="admin-avatar">
                            {admin.name?.charAt(0).toUpperCase() || "A"}
                        </div>

                        <div>
                            <h4>{admin.name || "Administrator"}</h4>
                            <p>Administrator</p>
                        </div>

                    </div>

                    <button className="logout-btn" onClick={logout}>
                        <i className="fas fa-sign-out-alt"></i>
                        Logout
                    </button>

                </div>

            </aside>


            {/* MAIN DASHBOARD */}

            <main className="dashboard-main">

                {/* TOPBAR */}

                <header className="dashboard-topbar">

                    <div>
                        <span>WELCOME BACK</span>
                        <h2>Admin Dashboard</h2>
                    </div>

                    <div className="topbar-profile">

                        <div className="topbar-admin-info">
                            <h4>{admin.name || "Administrator"}</h4>
                            <p>Admin</p>
                        </div>

                        <div className="topbar-avatar">
                            {admin.name?.charAt(0).toUpperCase() || "A"}
                        </div>

                    </div>

                </header>


                {/* DASHBOARD CONTENT */}

                <div className="dashboard-content">

                    {/* OVERVIEW */}

                    <section className="dashboard-overview" id="overview">

                        <div className="dashboard-intro">

                            <div>
                                <span className="intro-label">
                                    YOUR WORKSPACE
                                </span>

                                <h3>Dashboard Overview</h3>

                                <p>
                                    Monitor registered users and manage all
                                    event enquiries from one place.
                                </p>
                            </div>

                        </div>


                        {/* STATISTICS */}

                        <div className="dashboard-stats">

                            <div className="stat-box">

                                <div className="stat-top">
                                    <span>TOTAL USERS</span>
                                    <div className="stat-icon">
                                        <i className="fas fa-users"></i>
                                    </div>
                                </div>

                                <h2>{adminData.totalUsers}</h2>

                                <p>Registered accounts</p>

                            </div>


                            <div className="stat-box">

                                <div className="stat-top">
                                    <span>TOTAL ENQUIRIES</span>
                                    <div className="stat-icon">
                                        <i className="fas fa-calendar-check"></i>
                                    </div>
                                </div>

                                <h2>{adminData.totalEnquiries}</h2>

                                <p>Total event enquiries received</p>

                            </div>

                        </div>

                    </section>


                    {/* REGISTERED USERS */}

                    <section className="dashboard-section" id="users">

                        <div className="section-heading">

                            <div>
                                <span className="section-heading-span">
                                    01 / REGISTERED USERS
                                </span>

                                <h3>All Users</h3>
                            </div>

                        </div>


                        <div className="users-directory">

                            <div className="users-directory-header">

                                <div>
                                    <h4>Registered Members</h4>

                                    <p>
                                        Manage and view all registered accounts.
                                    </p>
                                </div>

                                <span className="users-count">
                                    {adminData.users?.length || 0} Members
                                </span>

                            </div>


                            <div className="users-table-wrapper">

                                <table className="users-table">

                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>USER INFORMATION</th>
                                            <th>EMAIL ADDRESS</th>
                                            <th>JOINED DATE</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {adminData.users?.length > 0 ? (

                                            adminData.users.map((user, index) => (

                                                <tr key={user._id || user.id}>

                                                    <td className="user-number">
                                                        {String(index + 1).padStart(2, "0")}
                                                    </td>

                                                    <td>
                                                        <div className="user-info">

                                                            <div className="user-avatar">
                                                                {user.name?.charAt(0).toUpperCase() || "U"}
                                                            </div>

                                                            <div>
                                                                <h5>{user.name}</h5>
                                                                <span>Registered User</span>
                                                            </div>

                                                        </div>
                                                    </td>

                                                    <td className="user-email">
                                                        {user.email}
                                                    </td>

                                                    <td className="user-date">
                                                        {user.createdAt
                                                            ? new Date(user.createdAt).toLocaleDateString(
                                                                "en-GB",
                                                                {
                                                                    day: "2-digit",
                                                                    month: "short",
                                                                    year: "numeric"
                                                                }
                                                            )
                                                            : "N/A"}
                                                    </td>

                                                </tr>

                                            ))

                                        ) : (

                                            <tr>
                                                <td colSpan="4" className="empty-users">
                                                    No registered users found.
                                                </td>
                                            </tr>

                                        )}

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </section>


                    {/* CUSTOMER INFORMATION */}

                    <section className="dashboard-section" id="customers">

                        <div className="section-heading">

                            <div>
                                <span className="section-heading-span">
                                    02 / CUSTOMERS
                                </span>

                                <h3>Customer Information</h3>
                            </div>

                        </div>

                        <div className="display-container">
                            <CustomerDisplay />
                        </div>

                    </section>


                    {/* EVENT DETAILS */}

                    <section className="dashboard-section" id="events">

                        <div className="section-heading">

                            <div>
                                <span className="section-heading-span">
                                    03 / EVENTS
                                </span>

                                <h3>Event Details</h3>
                            </div>

                        </div>

                        <div className="display-container">
                            <EventsDisplay />
                        </div>

                    </section>


                    {/* EVENT REQUIREMENTS */}

                    <section className="dashboard-section" id="requirements">

                        <div className="section-heading">

                            <div>
                                <span className="section-heading-span">
                                    04 / REQUIREMENTS
                                </span>

                                <h3>Event Requirements</h3>
                            </div>

                        </div>

                        <div className="display-container">
                            <RequirementsDisplay />
                        </div>

                    </section>

                </div>

            </main>

        </div>

    );

}

export default AdminDashboard;


