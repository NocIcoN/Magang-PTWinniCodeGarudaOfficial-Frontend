import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

function PracticeTests() {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        axios.get('/api/practice-tests')
            .then(response => setTests(response.data))
            .catch(error => console.error('Error fetching practice tests:', error));
    }, []);

    return (
        <div>
            <Navbar />  {/* Tambahkan ini */}
            <div style={styles.container}>
                <h2>Latihan Soal</h2>
                <ul>
                    {tests.map(test => (
                        <li key={test.id}>{test.title}</li>
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

export default PracticeTests;
