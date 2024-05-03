import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './AdminLogin.css';

import user_icon from '../Assests/user.png'
import password_icon from '../Assests/password.png'

const AdminLogin = () => {
    const [action, setAction] = useState("Submit")

    return (
        <div className="container">
            <div className="header">
                <div className="text">Admin Login</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <label htmlFor="username">Username: </label> <br />
                    <input type="text" id="username" name="username" />
                    <br /><br />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <label htmlFor="password">Password: </label> <br />
                    <input type="password" id="password" name="password" />
                    <br /><br />
                </div>
            </div>

            {/*Footer of the user form*/}
            <div className="submit-container">
                <div className="submit" onClick={()=>{setAction("Submit")}}>Login</div>
            </div>

        </div>
    )
}

export default AdminLogin;