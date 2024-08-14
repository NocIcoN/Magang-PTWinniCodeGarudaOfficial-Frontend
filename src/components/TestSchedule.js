import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

function TestSchedule() {
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        axios.get('/api/test-schedule')
            .then(response => setSchedule(response.data))
            .catch(error => console.error('Error fetching test schedule:', error));
    }, []);

    return (
        <div>
            <Navbar />
            <div style={styles.container}>
                <h2>Jadwal Tes</h2>
                <ul>
                    {schedule.map(item => (
                        <li key={item.id}>{item.date} - {item.title}</li>
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

export default TestSchedule;
