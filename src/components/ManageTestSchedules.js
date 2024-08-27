import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';
import Footer from './Footer';

function ManageTestSchedules() {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        axios.get('/api/test-schedules')
            .then(response => setSchedules(response.data))
            .catch(error => console.error('Error fetching test schedules:', error));
    }, []);

    return (
        <div>
            <NavbarAdmin />
            <div style={styles.container}>
                <h2>Kelola Jadwal Tes</h2>
                <ul>
                    {schedules.map(schedule => (
                        <li key={schedule.id}>{schedule.date} - {schedule.description}</li>
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

export default ManageTestSchedules;
