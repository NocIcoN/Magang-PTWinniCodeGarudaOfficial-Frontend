import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css'

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
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
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to login');
            }

            const data = await response.json();
            // Assuming the API returns a token on successful login
            localStorage.setItem('token', data.token);

            // Redirect to the dashboard or homepage on successful login
            navigate('/dashboard');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container">
            <div className="loginBox">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
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
                    <button type="submit" className="button">Login</button>
                </form>
                <p className="text">
                    Belum punya akun? <Link to="/register" className="link">Daftar di sini</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
