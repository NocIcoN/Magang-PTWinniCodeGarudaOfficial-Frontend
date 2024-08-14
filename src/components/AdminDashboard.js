import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
    return (
        <div>
            <h2>Dashboard Admin</h2>
            <ul>
                <li><Link to="/manage-users">Kelola Pengguna</Link></li>
                <li><Link to="/manage-content">Kelola Konten TOEFL</Link></li>
                <li><Link to="/manage-schedule">Kelola Jadwal Tes</Link></li>
                <li><Link to="/manage-results">Kelola Hasil Tes</Link></li>
                <li><Link to="/admin-report">Lihat Laporan</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    );
}

export default AdminDashboard;
