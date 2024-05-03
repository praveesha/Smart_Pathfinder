import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Register.css'; // Import CSS file for styling

const LoginRegister = () => {
    const [action, setAction] = useState("Submit")

    return (
        <div className="container">

            {/*Header of the user form*/}
            <div className="header">
                <div className="text">Please Fill Out the Form to Register</div>
                <div className="underline"></div>
            </div>

            {/*User inputs for the user form*/}
            <div className="inputs">
                {/* Name Input */}
                <div className="input">
                    <label htmlFor="fname">First Name:  </label> <br />
                    <input type="text" id="fname" name="fname" />
                    <br /><br />
                </div>

                <div className="input">
                    <label htmlFor="lname">Last Name:  </label> <br />
                    <input type="text" id="lname" name="lname" />
                    <br /><br />
                </div>


                {/* NIC Input */}
                <div className="input">
                    <label htmlFor="nic">NIC:  </label><br />
                    <input type="text" id="nic" name="nic" />
                    <br /><br />
                </div>

                {/* Mobile Number Input */}
                <div className="input">
                    <label htmlFor="mobile">Mobile Number:  </label> <br />
                    <input type="tel" id="mobile" name="mobile" />
                    <br /><br />
                </div>

                {/* Address Input */}
                <div className="input">
                    <label htmlFor="address">Address:  </label><br />
                    <input type="text" id="address" name="address" />
                    <br /><br />
                </div>

                {/* Destination Select Dropdown */}
                <div className="input">
                    <label htmlFor="destination">Destination:  </label> <br />
                    <select id="destination" name="destination">
                        <option value="gymnasium">Gymnasium</option>
                        <option value="faculty">Faculty of IT</option>
                        <option value="lagaan">Lagaan</option>
                        <option value="medical">Medical Center</option>
                        <option value="sentra">Sentra Court</option>
                    </select>
                    <br /><br />
                </div>

                {/* Purpose Textarea */}
                <div className="inputadd">
                    <label htmlFor="purpose">Purpose of entering the UoM premises:</label> <br />
                    <textarea id="purpose" name="purpose" rows="6" cols="50"></textarea>
                    <br /><br />
                </div>
            </div>

            {/*Footer of the user form*/}
            <div className="submit-container">
                <div className="submit" onClick={()=>{setAction("Submit")}}>Submit</div>
            </div>
        </div>
    )
}

export default LoginRegister;
