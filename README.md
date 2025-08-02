# Niroggyan – Healthcare Appointment Booking Interface

A responsive web application that allows users to search for doctors, view their availability, and book appointments. Built using React for the frontend and Node.js/Express to serve static JSON data on the backend.

---

## Objective

Create a healthcare appointment booking system where users can:

- View a list of doctors
- Filter by name or specialization
- View individual doctor profiles and available slots
- Book appointments through a simple form
- View and cancel booked appointments

---

## Tools / Libraries Used

### Frontend

- **React.js** – Component-based UI development
- **React Router DOM** – For routing between views
- **React Context API** – Global state management (doctors and appointments)
- **React Icons** – Icon set for enhanced UI
- **CSS (custom)** – Responsive styling
- **Bootstrap** – Utility classes for layout

### Backend (Mock)

- **Node.js** – JavaScript runtime environment
- **Express.js** – Lightweight server to serve static files and JSON
- **Static JSON** – Used as mock data for doctors and schedules

> Note: Backend currently serves only static data via Express; no persistent database or real API integration is used.

---

## Core Features

- Home page displaying a list of doctors with:
  - Name, specialization, image, and availability
- Search bar to filter doctors by name or specialization
- Doctor profile page with available slots and booking option
- Appointment form with input validation
- Global state using Context API for appointments and doctors
- View all booked appointments with cancel functionality
- Fully responsive layout (mobile/tablet/desktop)

---

## Improvements With More Time

- Add user authentication (patients and doctors)
- Connect to a real database (e.g., MongoDB or Firebase)
- Replace mock JSON with real REST APIs
- Send email confirmations after booking/canceling appointments
- Doctor/Admin dashboard for managing availability
- Integrate a calendar-based booking system
- Add localization (multilingual UI)
- Include unit and integration tests using Jest

---

## Challenges Faced and Solutions

**1. Real-time Doctor Search**
- **Challenge**: Implement search filtering across name and specialization
- **Solution**: Controlled input + `Array.filter()` applied on global doctor data

**2. Global State Management**
- **Challenge**: Avoid prop drilling across components
- **Solution**: Used React Context API for centralized state sharing

**3. Responsive Header with Search and Tabs**
- **Challenge**: Align brand, links, and search bar on all screen sizes
- **Solution**: Used Flexbox with media queries for responsive layout

**4. Time Formatting**
- **Challenge**: Format ISO datetime strings for UI readability
- **Solution**: Used `toLocaleString()` to format date/time consistently

---

## Live Demo

👉 [Click to View the App](https://n2sj7s.csb.app)

---

## GitHub Repository

👉 [GitHub Repo Link](https://github.com/Bhoomika-Macha/niroggyan-booking-healthcare-appointments)

---


