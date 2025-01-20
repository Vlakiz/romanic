import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import ServicesPage from '../ServicesPage/ServicesPage';
import CoursesPage from '../CoursesPage/CoursesPage';

const AppMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/services" element={<ServicesPage/>} />
      <Route path="/courses" element={<CoursesPage/>} />
    </Routes>
  );
};

export default AppMain;