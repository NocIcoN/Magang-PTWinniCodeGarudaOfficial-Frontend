import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';
import Footer from './Footer';

function AdminReport() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        axios.get('/api/reports')
            .then(response => setReports(response.data))
            .catch(error => console.error('Error fetching reports:', error));
    }, []);

    return (
        <div>
            <NavbarAdmin />
            <div style={styles.container}>
                <h2>Laporan Admin</h2>
                <ul>
                    {reports.map(report => (
                        <li key={report.id}>{report.title}</li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        textAlign: 'left',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh'
    }
};

export default AdminReport;
