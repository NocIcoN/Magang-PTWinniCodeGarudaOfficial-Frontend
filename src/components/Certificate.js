import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

function Certificate() {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        axios.get('/api/certificates')
            .then(response => setCertificates(response.data))
            .catch(error => console.error('Error fetching certificates:', error));
    }, []);

    return (
        <div>
            <Navbar />
            <div style={styles.container}>
                <h2>Sertifikat</h2>
                <ul>
                    {certificates.map(certificate => (
                        <li key={certificate.id}>{certificate.title}</li>
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
        textAlign: 'left'
    }
};

export default Certificate;
