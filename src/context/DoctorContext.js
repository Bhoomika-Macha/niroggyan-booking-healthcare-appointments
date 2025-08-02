import React, { createContext, useContext, useEffect, useState } from "react";
import doctorsData from "../data/doctors.json";

export const DoctorContext = createContext();

export const useDoctorContext = () => useContext(DoctorContext);

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  const addAppointment = (appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  const removeAppointment = (indexToRemove) => {
    setAppointments((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <DoctorContext.Provider
      value={{ doctors, appointments, addAppointment, removeAppointment }}
    >
      {children}
    </DoctorContext.Provider>
  );
};
