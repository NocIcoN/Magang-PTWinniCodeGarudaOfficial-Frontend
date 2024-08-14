import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li><Link to="/test-info">Melihat Informasi Tes</Link></li>
                <li><Link to="/study-materials">Mengakses Materi Belajar</Link></li>
                <li><Link to="/test-practice">Mengerjakan Latihan Soal</Link></li>
                <li><Link to="/test-schedule">Melihat Jadwal Tes</Link></li>
                <li><Link to="/test-results">Melihat Hasil</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    );
}

export default Dashboard;
