import '../assets/styles/Dashboard.css'
import CustomerDisplay from '../pages/CustomerDisplay'
import EventsDisplay from '../pages/EventsDisplay'
import RequirementsDisplay from '../pages/RequirementsDisplay'

function Dashboard() {
    return (
        <div className="dashboard-layout">

            {/* Sidebar */}
            <aside className="dashboard-sidebar">

                <div className="dashboard-logo">
                    <span>EVENT</span>ENT
                    <small>EVENT MANAGEMENT</small>
                </div>

                <p className="sidebar-heading">MENU</p>

                <nav className="dashboard-nav">
                    <a href="/dashboard" className="nav-item active">⌂ Overview</a>
                    <a href="/dashboard#customers" className="nav-item">♙ Customers</a>
                    <a href="/dashboard#events" className="nav-item">▦ Events</a>
                    <a href="/dashboard#requirements" className="nav-item">☷ Requirements</a>
                </nav>

                <div className="sidebar-bottom">
                    <div className="sidebar-admin">
                        <div className="admin-avatar">A</div>
                        <div>
                            <h4>Administrator</h4>
                            <p>Admin Panel</p>
                        </div>
                    </div>
                </div>

            </aside>

            {/* Main Dashboard */}
            <main className="dashboard-main">

                <header className="dashboard-topbar">
                    <div>
                        <span>WELCOME BACK</span>
                        <h2>Dashboard Overview</h2>
                    </div>

                    <div className="topbar-avatar">A</div>
                </header>

                <section className="dashboard-content">

                    <div className="dashboard-intro">
                        <h3>Customer Enquiries</h3>
                        <p>Manage your customers, events and their requirements.</p>
                    </div>

                    {/* Customer Section */}
                    <section className="dashboard-section" id="customers">
                        <div className="section-heading">
                            <div>
                                <span className='section-heading-span'>01 / CUSTOMERS</span>
                                <h3>Customer Information</h3>
                            </div>
                        </div>

                        <CustomerDisplay />
                    </section>

                    {/* Events Section */}
                    <section className="dashboard-section" id="events">
                        <div className="section-heading">
                            <div>
                                <span className='section-heading-span'>02 / EVENTS</span>
                                <h3>Event Details</h3>
                            </div>
                        </div>

                        <EventsDisplay />
                    </section>

                    {/* Requirements Section */}
                    <section className="dashboard-section" id="requirementss">
                        <div className="section-heading">
                            <div>
                                <span className='section-heading-span'>03 / REQUIREMENTS</span>
                                <h3>Event Requirements</h3>
                            </div>
                        </div>

                        <RequirementsDisplay />
                    </section>

                </section>

            </main>
        </div>
    )
}

export default Dashboard