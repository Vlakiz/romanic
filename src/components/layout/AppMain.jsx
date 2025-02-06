import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from 'src/pages/Homepage';
import ServicesPage from 'src/pages/ServicesPage';
import CoursesPage from 'src/pages/CoursesPage';

const AppMain = () => {
  return (
    <main className='container px-0'>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/courses" element={<CoursesPage/>} />
      </Routes>
    </main>
  );
};

export default AppMain;