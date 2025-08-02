import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DoctorProfile from "./components/DoctorProfile";
import BookAppointment from "./components/BookAppointment";
import Header from "./components/Header";
import MyAppointments from "./components/MyAppointments";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/book/:id" element={<BookAppointment />} />
        <Route path="/appointments" element={<MyAppointments />} />
      </Routes>
    </div>
  );
};

export default App;
