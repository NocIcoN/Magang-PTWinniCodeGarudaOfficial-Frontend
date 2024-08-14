import React from 'react';

function Register() {
    return (
        <div style={styles.container}>
            <div style={styles.registerBox}>
                <h2>Register</h2>
                <form style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label>Username</label>
                        <input type="text" name="username" style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Email</label>
                        <input type="email" name="email" style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Password</label>
                        <input type="password" name="password" style={styles.input} />
                    </div>
                    <button type="submit" style={styles.button}>Register</button>
                </form>
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
    registerBox: {
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
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    }
};

export default Register;
