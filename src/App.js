import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import TestInfo from './components/TestInfo';
import StudyMaterials from './components/StudyMaterials';
import PracticeTests from './components/PracticeTests';
import TestSchedule from './components/TestSchedule';
import TestResults from './components/TestResults';
import Certificate from './components/Certificate';
import AdminReport from './components/AdminReport';
import ManageUsers from './components/ManageUsers';
import ManageContent from './components/ManageContent';
import ManageTestSchedules from './components/ManageTestSchedules';
import ManageTestResults from './components/ManageTestResults';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigasi Utama */}
        <Routes>
          {/* Halaman Utama (User Dashboard) */}
          <Route path="/" element={<UserDashboard />} />

          {/* Halaman Profil (Login/Logout) */}
          <Route path="/profile" element={<Profile />} />

          {/* Dashboard Admin */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Halaman Informasi Tes */}
          <Route path="/test-info" element={<TestInfo />} />

          {/* Halaman Materi Belajar */}
          <Route path="/study-materials" element={<StudyMaterials />} />

          {/* Halaman Latihan Soal */}
          <Route path="/practice-tests" element={<PracticeTests />} />

          {/* Halaman Jadwal Tes */}
          <Route path="/test-schedule" element={<TestSchedule />} />

          {/* Halaman Hasil Tes */}
          <Route path="/test-results" element={<TestResults />} />

          {/* Halaman Sertifikat */}
          <Route path="/certificate" element={<Certificate />} />

          {/* Halaman Laporan Admin */}
          <Route path="/admin-report" element={<AdminReport />} />

          {/* Halaman Kelola Pengguna (Admin Only) */}
          <Route path="/manage-users" element={<ManageUsers />} />

          {/* Halaman Kelola Konten (Admin Only) */}
          <Route path="/manage-content" element={<ManageContent />} />

          {/* Halaman Kelola Jadwal Tes (Admin Only) */}
          <Route path="/manage-test-schedules" element={<ManageTestSchedules />} />

          {/* Halaman Kelola Hasil Tes (Admin Only) */}
          <Route path="/manage-test-results" element={<ManageTestResults />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />
          
          {/* Registrasi */}
          <Route path="/register" element={<Register />} />

          {/* Logout */}
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
