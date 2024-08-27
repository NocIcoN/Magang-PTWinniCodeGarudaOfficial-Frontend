import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>Test TOEFL</div>
            <ul style={styles.navLinks}>
                <li><Link to="/" style={styles.link}>Home</Link></li>
                <li><Link to="/test-info" style={styles.link}>Informasi Tes</Link></li>
                <li><Link to="/study-materials" style={styles.link}>Materi Belajar</Link></li>
                <li><Link to="/practice-tests" style={styles.link}>Latihan Soal</Link></li>
                <li><Link to="/test-schedule" style={styles.link}>Jadwal Tes</Link></li>
                <li><Link to="/profile" style={styles.link}>Profil</Link></li>
            </ul>
        </nav>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#343a40',
        color: '#fff'
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold'
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '15px'
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px'
    }
};

export default Navbar;
