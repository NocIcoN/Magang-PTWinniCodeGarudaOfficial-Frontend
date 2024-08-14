import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Profile() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk mengecek apakah user sudah login atau belum
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate('/login'); // Redirect ke dashboard setelah login
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/logout'); // Redirect ke home setelah logout
    };

    return (
    <div>
        <Navbar />
        <div style={styles.container}>
            <div style={styles.profileBox}>
                <h2>Profil Pengguna</h2>
                {isLoggedIn ? (
                    <div style={styles.profileCard}>
                        <img src="https://via.placeholder.com/150" alt="Profile" style={styles.profileImage} />
                        <div style={styles.profileDetails}>
                            <h3>Nama Pengguna</h3>
                            <p>Email: user@example.com</p>
                            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
                        </div>
                    </div>
                ) : (
                    <div style={styles.profileCard}>
                        <h3>Anda belum login.</h3>
                        <button onClick={handleLogin} style={styles.loginButton}>Login</button>
                    </div>
                )}
            </div>
        </div>
        <Footer/>
    </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh'
    },
    profileBox: {
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '100%',
        maxWidth: '500px'
    },
    profileCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
    },
    profileImage: {
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        objectFit: 'cover'
    },
    profileDetails: {
        textAlign: 'center',
    },
    logoutButton: {
        padding: '10px 20px',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    loginButton: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    }
};

export default Profile;
