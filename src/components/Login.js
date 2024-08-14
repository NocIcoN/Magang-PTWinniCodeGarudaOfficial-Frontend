import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div style={styles.container}>
            <div style={styles.loginBox}>
                <h2>Login</h2>
                <form style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label>Username</label>
                        <input type="text" name="username" style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Password</label>
                        <input type="password" name="password" style={styles.input} />
                    </div>
                    <button type="submit" style={styles.button}>Login</button>
                </form>
                <p style={styles.text}>
                    Belum punya akun? <Link to="/register" style={styles.link}>Daftar di sini</Link>
                </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5'
    },
    loginBox: {
        width: '400px',
        padding: '40px',
        backgroundColor: '#fff',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        textAlign: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        marginBottom: '15px',
        textAlign: 'left'
    },
    input: {
        width: '100%',
        padding: '10px',
        marginTop: '5px',
        borderRadius: '4px',
        border: '1px solid #ddd',
    },
    button: {
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    text: {
        marginTop: '20px',
        color: '#555'
    },
    link: {
        color: '#007bff',
        textDecoration: 'none',
    }
};

export default Login;
