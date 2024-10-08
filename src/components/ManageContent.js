import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';
import Footer from './Footer';

function ManageContent() {
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios.get('/api/manage-content')
            .then(response => setContent(response.data))
            .catch(error => console.error('Error fetching content:', error));
    }, []);

    return (
        <div>
            <NavbarAdmin />
            <div style={styles.container}>
                <h2>Kelola Konten TOEFL</h2>
                <ul>
                    {content.map(item => (
                        <li key={item.id}>{item.title}</li>
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

export default ManageContent;
