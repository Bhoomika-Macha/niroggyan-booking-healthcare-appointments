import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDoctorContext } from "../../context/DoctorContext";
import "./index.css";

const DoctorProfile = () => {
  const { id } = useParams();
  const { doctors } = useDoctorContext();
  const navigate = useNavigate();

  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <div>Doctor not found.</div>;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Available Today":
        return "green";
      case "Fully Booked":
        return "red";
      case "On Leave":
        return "orange";
      default:
        return "#555";
    }
  };

  const handleBook = () => {
    navigate(`/book/${doctor.id}`);
  };

  return (
    <div className="profile-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      <div className="profile-card">
        <img src={doctor.image} alt={doctor.name} className="profile-image" />
        <div className="profile-details">
          <h2 className="profile-name">{doctor.name}</h2>
          <p className="profile-specialization">{doctor.specialization}</p>
          <p className="profile-availability">
            <span
              style={{
                color: getStatusColor(doctor.availability),
                fontWeight: "bold",
              }}
            >
              {doctor.availability}
            </span>
          </p>
          <h4>Available Slots:</h4>
          <ul>
            {doctor.schedule.length === 0 ? (
              <li>No available slots</li>
            ) : (
              doctor.schedule.map((slot, index) => {
                const date = new Date(slot);
                return (
                  <li key={index}>
                    {date.toLocaleDateString()} —{" "}
                    {date.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </li>
                );
              })
            )}
          </ul>
          <button className="book-btn" onClick={handleBook}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
