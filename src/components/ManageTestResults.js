import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';
import Footer from './Footer';

function ManageTestResults() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        axios.get('/api/test-results')
            .then(response => setResults(response.data))
            .catch(error => console.error('Error fetching test results:', error));
    }, []);

    return (
        <div>
            <NavbarAdmin />
            <div style={styles.container}>
                <h2>Kelola Hasil Tes</h2>
                <ul>
                    {results.map(result => (
                        <li key={result.id}>{result.studentName} - Score: {result.score}</li>
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

export default ManageTestResults;
