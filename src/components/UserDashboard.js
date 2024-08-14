import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function UserDashboard() {
    return (
        <div>
            <Navbar />
            <main style={styles.main}>
                <h1>Selamat Datang di Test TOEFL Karyawan & Test TOEFL</h1>
                <p>Di sini Anda dapat mempersiapkan diri dengan tes TOEFL, mengakses materi belajar, dan melihat jadwal serta hasil tes.</p>
                
                <div style={styles.grid}>
                    <div style={styles.card}>
                        <h3>Informasi Tes</h3>
                        <p>Dapatkan informasi lengkap mengenai tes TOEFL yang Anda butuhkan.</p>
                    </div>
                    <div style={styles.card}>
                        <h3>Materi Belajar</h3>
                        <p>Akses materi belajar yang dirancang khusus untuk membantu Anda lulus tes TOEFL.</p>
                    </div>
                    <div style={styles.card}>
                        <h3>Latihan Soal</h3>
                        <p>Latih kemampuan Anda dengan soal-soal latihan TOEFL yang kami sediakan.</p>
                    </div>
                    <div style={styles.card}>
                        <h3>Jadwal Tes</h3>
                        <p>Periksa jadwal tes TOEFL yang tersedia dan daftarkan diri Anda.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

const styles = {
    main: {
        padding: '20px',
        textAlign: 'center'
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
        flexWrap: 'wrap'
    },
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '250px',
        textAlign: 'left',
        backgroundColor: '#f8f9fa'
    }
};

export default UserDashboard;
