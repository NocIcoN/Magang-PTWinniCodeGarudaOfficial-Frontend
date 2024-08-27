import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';
import Footer from './Footer';

function ManageUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/manage-users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
            <NavbarAdmin />
            <div style={styles.container}>
                <h2>Kelola Pengguna</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.username}</li>
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

export default ManageUsers;
