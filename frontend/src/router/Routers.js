import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/about";
import OtherServices from "../pages/OtherServices";

import Home from "../pages/Home";

import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import TouristVisa from "../pages/touristvisa";

import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";

import StudyVisa from "../pages/studyVisa";
import WorkVisa from "../pages/WorkVisa";

const Routers = () => {
  return (
    <Routes>
      <Route path="/otherservices" element={<OtherServices />} />
      <Route path="/workVisa" element={<WorkVisa />} />
      <Route path="/studyVisa" element={<StudyVisa />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tourist" element={<TouristVisa/>} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
