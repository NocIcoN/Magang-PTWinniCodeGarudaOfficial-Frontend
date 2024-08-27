import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './NavbarUsers';
import Footer from './Footer';

function TestInfo() {
    const [testInfo, setTestInfo] = useState([]);

    useEffect(() => {
        axios.get('/api/test-info')
            .then(response => setTestInfo(response.data))
            .catch(error => console.error('Error fetching test info:', error));
    }, []);

    return (
        <div>
            <Navbar />
            <div style={styles.container}>
                <h2>Informasi Tes</h2>
                <ul>
                    {testInfo.map(info => (
                        <li key={info.id}>{info.title}</li>
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

export default TestInfo;
