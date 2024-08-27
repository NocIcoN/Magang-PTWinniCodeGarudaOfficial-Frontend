import React from 'react';
import NavbarAdmin from './NavbarAdmin';
import Footer from './Footer';
import '../styles/AdminDashboard.css';

function AdminDashboard() {
    return (
        <div>
            <NavbarAdmin /> {/* Navbar ditambahkan di sini */}
            <div className="admin-dashboard">
                <h2>Dashboard Admin</h2>
                <div className="stats">
                    <div className="card">
                        <h3>Total Users</h3>
                        <p>120</p>
                    </div>
                    <div className="card">
                        <h3>Total Tests</h3>
                        <p>80</p>
                    </div>
                    <div className="card">
                        <h3>Pending Approvals</h3>
                        <p>5</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default AdminDashboard;