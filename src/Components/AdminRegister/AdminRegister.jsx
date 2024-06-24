import React, { useState } from "react";
//import { Link } from 'react-router-dom';
import './AdminRegister.css';

import user_icon from '../Assests/user.png'
import password_icon from '../Assests/password.png'
import email_icon from '../Assests/email.png'
import nic_icon from '../Assests/nic.png'
import confirm_icon from '../Assests/confirm.png'

const AdminRegister = () => {
    const [action, setAction] = useState("Submit")

    return (
        <div className="container">
            <div className="header">
                <div className="text">Admin Registration</div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <label htmlFor="username">Username: </label> <br />
                    <input type="text" id="username" name="username" />
                    <br /><br />
                </div>
                <div className="input">
                    <img src={nic_icon} alt="" />
                    <label htmlFor="nic">NIC: </label> <br />
                    <input type="text" id="nic" name="nic" />
                    <br /><br />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <label htmlFor="email">Email: </label> <br />
                    <input type="email" id="email" name="email" />
                    <br /><br />
                </div>
                <div className="input">
                    <img src={password_icon} id="passwordicon" />
                    <label htmlFor="password">Password: </label> <br />
                    <input type="password" id="password" name="password" />
                    <br /><br />
                </div>
                <div className="input">
                    <img src={confirm_icon} id="confirmicon" />
                    <label htmlFor="cpassword">Confirm Password: </label> <br />
                    <input type="password" id="cpassword" name="cpassword" />
                    <br /><br />
                </div>
            </div>

            {/*Footer of the user form*/}
            <div className="submit-container">
                <div className="submit" onClick={()=>{setAction("Submit")}}>Register</div>
            </div>

        </div>
    )
}

export default AdminRegister;