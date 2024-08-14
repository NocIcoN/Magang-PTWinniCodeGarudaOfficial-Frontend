import React from 'react';

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2024 Test TOEFL Karyawan & Test TOEFL. All rights reserved.</p>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#343a40',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%'
    }
};

export default Footer;
