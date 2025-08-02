import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DoctorContext } from "../../context/DoctorContext";
import "./index.css";

const Home = () => {
  const { doctors } = useContext(DoctorContext);
  const query = new URLSearchParams(useLocation().search).get("q") || "";

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(query.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="home-container">
      {filteredDoctors.map((doc) => (
        <Link to={`/doctor/${doc.id}`} key={doc.id} className="doctor-card">
          <img src={doc.image} alt={doc.name} className="doctor-image" />
          <h3>{doc.name}</h3>
          <p>{doc.specialization}</p>
          <span className={`status ${doc.availability.replace(/\s/g, "-")}`}>
            {doc.availability}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Home;
