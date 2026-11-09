
import { useEffect, useState } from "react";
import API from "../Api/Api";
import "../assets/styles/UserDashboard.css";

function UserDashboard() {

    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchUserDashboard = async () => {

            try {
                const response = await API.get(
                    "/api/user/dashboard",
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );

                setDashboardData(response.data.data);

            } catch (err) {
                setError(
                    err.response?.data?.message ||
                    "Unable to load your dashboard."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchUserDashboard();

    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    if (loading) {
        return <h3>Loading your dashboard...</h3>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const user = dashboardData?.user;
    const enquiries = dashboardData?.enquiries || [];

    return (
        <div className="user-dashboard">

            <header className="user-dashboard-header">

                <div className="user-dashboard-logo">
                    EVENT<span>ENT.</span>
                </div>

                <button onClick={logout}>
                    Logout
                </button>

            </header>

            <main className="user-dashboard-main">

                <section className="user-welcome">
                    <p>YOUR PERSONAL SPACE</p>

                    <h1>
                        Welcome back, {user?.name || "User"}!
                    </h1>

                    <p>
                        Keep track of your celebrations and event enquiries.
                    </p>
                </section>

                <section className="user-profile-section">

                    <div>
                        <span>YOUR PROFILE</span>
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </div>

                    <div className="user-count">
                        <span>YOUR ENQUIRIES</span>
                        <h2>{dashboardData?.totalEnquiries || 0}</h2>
                    </div>

                </section>

                <section className="user-enquiries">

                    <div className="user-section-heading">
                        <div>
                            <span>YOUR EVENT JOURNEY</span>
                            <h2>My Enquiries</h2>
                        </div>
                    </div>

                    {enquiries.length > 0 ? (

                        enquiries.map((enquiry) => (

                            <div
                                className="user-enquiry"
                                key={enquiry._id}
                            >
                                <h3>{enquiry.name}</h3>

                                <p>
                                    Mobile: {enquiry.mobileNumber}
                                </p>

                                <p>
                                    Email: {enquiry.emailAddress}
                                </p>

                                {enquiry.eventDetails && (
                                    <>
                                        <h4>Event Details</h4>

                                        <p>
                                            Event: {enquiry.eventDetails.eventType}
                                        </p>

                                        <p>
                                            City: {enquiry.eventDetails.eventCity}
                                        </p>

                                        <p>
                                            Date: {
                                                enquiry.eventDetails.eventDate
                                                    ? new Date(enquiry.eventDetails.eventDate).toLocaleDateString()
                                                    : "Not available"
                                            }
                                        </p>
                                    </>
                                )}

                                {enquiry.requirements && (
                                    <>
                                        <h4>Requirements</h4>

                                        <p>
                                            Budget: {enquiry.requirements.budget}
                                        </p>

                                        <p>
                                            Services: {
                                                enquiry.requirements.services?.join(", ")
                                            }
                                        </p>

                                        <p>
                                            Theme: {enquiry.requirements.theme}
                                        </p>
                                    </>
                                )}

                            </div>

                        ))

                    ) : (

                        <div className="no-enquiries">
                            <h3>No enquiries yet!</h3>

                            <p>
                                Your event enquiries will appear here once
                                you submit your event details.
                            </p>
                        </div>

                    )}

                </section>

            </main>

        </div>
    );
}

export default UserDashboard;