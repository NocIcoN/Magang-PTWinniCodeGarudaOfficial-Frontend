import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavbarAdmin.css';

function NavbarAdmin() {
    return (
        <nav className="navbar">
            <div className="logo">TOEFL Admin</div>
            <ul className="dashboard-menu">
                <li><Link to="/admin">Dashboard</Link></li>
                <li><Link to="/manage-users">Pengguna</Link></li>
                <li><Link to="/manage-content">Konten TOEFL</Link></li>
                <li><Link to="/manage-test-schedules">Jadwal Tes</Link></li>
                <li><Link to="/manage-test-results">Hasil Tes</Link></li>
                <li><Link to="/admin-report">Laporan</Link></li>
                {/* <li><Link to="/logout">Logout</Link></li> */}
            </ul>
        </nav>
    );
}

export default NavbarAdmin;
