import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DoctorContext } from "../../context/DoctorContext";
import "./index.css";

const BookAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { doctors, addAppointment } = useContext(DoctorContext);
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateTime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, dateTime } = formData;
    if (name && email && dateTime) {
      addAppointment({
        doctorId: doctor.id,
        name,
        email,
        time: dateTime,
      });
      setSubmitted(true);
      setTimeout(() => {
        navigate("/appointments");
      }, 1500);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="book-appointment-container">
      <h2>Book Appointment with {doctor?.name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <select
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
        >
          <option value="">Select a slot</option>
          {doctor?.schedule.map((slot) => (
            <option key={slot} value={slot}>
              {new Date(slot).toLocaleString()}
            </option>
          ))}
        </select>
        <button className="book-btn" type="submit">
          Book Appointment
        </button>
      </form>
      {submitted && (
        <div className="success-message">Appointment Confirmed!</div>
      )}
    </div>
  );
};

export default BookAppointment;
