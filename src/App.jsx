import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import LeavePage from './page/HRM/Leave';
import ApplicantPage from './page/HRM/Applicant';
import RecruitmentPage from './page/HRM/Recruitment';
import LandingPage from './page/LandingPage/LandingPage';



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/recruite" element={<RecruitmentPage />} />
      <Route path="/leave" element={<LeavePage />} />
      <Route path="/applicant" element={<ApplicantPage />} />
    </Routes>
    </>
  )
}

export default App
