
import "../assets/styles/EventsDisplay.css";
import { useState, useEffect } from "react";
import API from "../Api/Api.jsx";

function EventsDisplay() {

    const [eventsData, setEventData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const getEvents = async () => {

        try {

            const responseEvent = await API.get(
                "/api/eventdetails",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );

            console.log("Events API Response:", responseEvent.data);

            setEventData(responseEvent.data.data || []);

        } catch (error) {

            console.log("Events Fetch Error:", error.response?.data || error);

            setError(
                error.response?.data?.message ||
                "Unable to fetch event details."
            );

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        getEvents();
    }, []);

    if (loading) {
        return <p className="events-message">Loading event details...</p>;
    }

    if (error) {
        return <p className="events-message events-error">{error}</p>;
    }

    if (eventsData.length === 0) {
        return (
            <p className="events-message">
                No event details have been submitted yet.
            </p>
        );
    }

    return (

        <div className="events-list">

            {eventsData.map((e) => (

                <div className="eventsData-one" key={e._id}>

                    <div className="event-card-header">

                        <div>
                            <span>EVENT INFORMATION</span>
                            <h4>{e.eventType}</h4>
                        </div>

                        <span className="event-date">
                            {e.eventDate
                                ? new Date(e.eventDate).toLocaleDateString("en-IN")
                                : "N/A"}
                        </span>

                    </div>

                    <div className="event-details-grid">

                        <div>
                            <span>EVENT CITY</span>
                            <p>{e.eventCity || "N/A"}</p>
                        </div>

                        <div>
                            <span>START TIME</span>
                            <p>{e.startTime || "N/A"}</p>
                        </div>

                        <div>
                            <span>END TIME</span>
                            <p>{e.endTime || "N/A"}</p>
                        </div>

                        <div>
                            <span>EXPECTED GUESTS</span>
                            <p>{e.expectedGuests || "N/A"}</p>
                        </div>

                        <div>
                            <span>EVENT DURATION</span>
                            <p>{e.eventDuration || "N/A"}</p>
                        </div>

                        <div>
                            <span>DATE PREFERENCE</span>
                            <p>{e.eventDateFixed || "N/A"}</p>
                        </div>

                        <div>
                            <span>VENUE PREFERENCE</span>
                            <p>{e.preference || "N/A"}</p>
                        </div>

                    </div>

                </div>

            ))}

        </div>

    );

}

export default EventsDisplay;


