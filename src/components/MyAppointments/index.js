import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../../context/DoctorContext";
import "./index.css";

const MyAppointments = () => {
  const { appointments, doctors, removeAppointment } =
    useContext(DoctorContext);
  const navigate = useNavigate();

  const getDoctorName = (id) => {
    const doctor = doctors.find((doc) => doc.id === id);
    return doctor ? doctor.name : "Unknown Doctor";
  };

  const handleCancel = (index) => {
    removeAppointment(index);
  };

  return (
    <div className="appointments-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      <h2>My Appointments</h2>
      {appointments.length === 0 ? (
        <p className="no-appointments">No appointments booked.</p>
      ) : (
        <ul className="appointments-list">
          {appointments.map((appt, index) => (
            <li key={index} className="appointment-card">
              <p>
                <strong>Patient Name:</strong> {appt.name}
              </p>
              <p>
                <strong>Email:</strong> {appt.email}
              </p>
              <p>
                <strong>Doctor:</strong> {getDoctorName(appt.doctorId)}
              </p>
              <p>
                <strong>Date & Time:</strong>{" "}
                {new Date(appt.time).toLocaleString()}
              </p>
              <button
                className="cancel-btn"
                onClick={() => handleCancel(index)}
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyAppointments;
