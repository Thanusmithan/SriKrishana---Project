// src/Login.js
import React, { useState } from 'react';
import './Css/Login.css';
import './Css/Alert.css'; // Ensure to import the CSS for Alert
import Form from 'react-bootstrap/Form';
import Header from './Componets/Header_Signup';
import Footer from './Componets/Footer';
import Alert from './Alert'; // Import the Alert component

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // Toggle for admin role
    const [alert, setAlert] = useState(null); // State for alert

    const handleSubmit = (e) => {
        e.preventDefault();

        const role = isAdmin ? 'Admin' : 'Patient';
        console.log("Role: ", role, "Email: ", email, "Password: ", password);

        // Admin and patient role-based redirection
        if (isAdmin && email === 'admin@hospital.com' && password === 'admin123') {
            setAlert({ message: 'Welcome to Admin Portal', type: 'success' });
            setTimeout(() => { window.location.href = '/admin_dashboard'; }, 2000); // Redirect after 2 seconds
        } else if (!isAdmin && email !== '' && password !== '') {
            setAlert({ message: 'Welcome to Patient Portal', type: 'success' });
            setTimeout(() => { window.location.href = '/patient_dashboard'; }, 2000); // Redirect after 2 seconds
        } else {
            // setAlert({ message: 'Invalid credentials, please try again', type: 'error' });
            setAlert({ message: 'Invalid, please try again....', type: 'error' });
        }
    };

    const toggleRole = () => {
        setIsAdmin(!isAdmin);
    };

    const closeAlert = () => {
        setAlert(null);
    };

    return (
        <div className="page-wrapper">
            <Header />
            <br />
            <div className="login-wrapper">
                <div className="login-left">
                    <div className="login-content">
                        <h1>Welcome Back!</h1>
                        <p className="subtitle">Please enter your Email, Password, and Role to continue</p>
                        <form onSubmit={handleSubmit} className="form-container">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input-field"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field"
                                required
                            />

                            <div className="login-role-switch-container">
                                <label className="login-role-label">Login as:</label>
                                <div className="login-role-toggle modern-toggle">
                                    <span className={`login-role-option ${!isAdmin ? 'login-active-role' : ''}`}>Patient</span>
                                    <Form className='mx-2'>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            checked={isAdmin}
                                            onChange={toggleRole}
                                        />
                                    </Form>
                                    <span className={`login-role-option ${isAdmin ? 'login-active-role' : ''}`}>Admin</span>
                                </div>
                            </div>
                            <a href="#" className="forgot-password">Forgot your password?</a>
                            <button type="submit" className="btn-login login-btn">Login</button>
                        </form>

                        <div className="signup-link">
                            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                        </div>

                        <div className="support-info">
                            <p>Need help? Contact our support team</p>
                            <a href="mailto:support@ayurved.com" className="support-email">support@ayurved.com</a>
                        </div>
                    </div>
                </div>
                <div className="login-right">
                    <div className="login-right-content text-bg-light opacity-30">
                        <h2>Nature Medicine</h2>
                        <p>The new gold standard for cancer treatment. This interactive report includes updated information about approved or investigational treatments for each patient.</p>
                    </div>
                </div>
            </div>
            <br />
            {alert && <Alert message={alert.message} type={alert.type} onClose={closeAlert}  />}
            <Footer />
        </div>
    );
};

export default Login;
