import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css'

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to register');
            }

            // Redirect to login page on successful registration
            navigate('/profile');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container">
            <div className="registerBox">
                <h2>Register</h2>
                {error && <p className="error">{error}</p>}
                <p className="text">
                    Sudah punya akun? <Link to="/login" className="link">Masuk di sini</Link>
                </p>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="inputGroup">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </div>
                    <button type="submit" className="button">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
