import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Trips from "../../pages/Trips";
import NotFound from "../../pages/NotFound";
// import logo from './logo.svg';

import "./App.css";
import TripDetails from "../../pages/TripDetails";
import About from "../../pages/About";
import Mission from "../Info/Mission";
import Team from "../Info/Team";
import Reviews from "../Info/Reviews";
import AdminLayout from "../Layouts/AdminLayout";
import SharedLayout from "../Layouts/SharedLayout";

function App() {
  return (
    <div className="App">
      {/* <h1>Travel</h1> */}
      <div>
        {/* <nav>
          <NavLink to="/" end className="NavLink">
            Home
          </NavLink>
          <NavLink to="/trips" className="NavLink">
            Trips
          </NavLink>
          <NavLink to="/about" className="NavLink">
            About
          </NavLink>
        </nav> */}
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/trips/:tripId" element={<TripDetails />} />
            <Route path="/about" element={<About />}>
              <Route path="mission" element={<Mission />} />
              <Route path="team" element={<Team />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            {/* <Route index element={<Dashboard />} />
    <Route path="sales" element={<Sales />} />
    <Route path="customers" element={<Customers />} /> */}
          </Route>
        </Routes>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
