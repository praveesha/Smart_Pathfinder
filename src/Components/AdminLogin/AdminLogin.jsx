import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        // Replace this with your actual login logic
        if (username === "adminFIT" && password === "password") {
            navigate('/dashboard');
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="ad-log-container">
            <div className="ad-log-header">
                <div className="ad-log-text">Admin Login</div>
                <div className="underline"></div>
            </div>
            <div className="ad-log-inputs">
                <div className="ad-log-input">
                    <AccountCircleIcon fontSize="large" style={{ marginRight: '10px' }} />
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="ad-log-input">
                    <LockIcon fontSize="large" style={{ marginRight: '10px' }} />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="ad-log-submit-container">
                <div className="ad-log-submit" onClick={handleLogin}>Login</div>
            </div>
        </div>
    );
}

export default AdminLogin;
