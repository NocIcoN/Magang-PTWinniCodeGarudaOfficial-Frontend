import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './NavbarUsers';
import Footer from './Footer';

function TestResults() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        axios.get('/api/test-results')
            .then(response => setResults(response.data))
            .catch(error => console.error('Error fetching test results:', error));
    }, []);

    return (
        <div>
            <Navbar/>
            <div style={styles.container}>
                <h2>Hasil Tes</h2>
                <ul>
                    {results.map(result => (
                        <li key={result.id}>{result.title}: {result.score}</li>
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

export default TestResults;
