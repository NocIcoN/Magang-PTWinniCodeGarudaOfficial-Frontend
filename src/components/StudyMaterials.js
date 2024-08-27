import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './NavbarUsers';
import Footer from './Footer';

function StudyMaterials() {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        axios.get('/api/study-materials')
            .then(response => setMaterials(response.data))
            .catch(error => console.error('Error fetching study materials:', error));
    }, []);

    return (
        <div>
            <Navbar />  {/* Tambahkan ini */}
            <div style={styles.container}>
                <h2>Materi Belajar</h2>
                <ul>
                    {materials.map(material => (
                        <li key={material.id}>{material.title}</li>
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

export default StudyMaterials;
