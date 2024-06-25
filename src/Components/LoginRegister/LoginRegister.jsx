import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

const LoginRegister = () => {
    const [formData, setFormData] = useState({
        rfid: '',
        fname: '',
        lname: '',
        nic: '',
        mobile: '',
        address: '',
        destination: 'gymnasium',
        purpose: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.rfid) newErrors.rfid = "RFID card ID is required";
        if (!formData.fname) newErrors.fname = "First name is required";
        if (!formData.lname) newErrors.lname = "Last name is required";
        if (!formData.nic) newErrors.nic = "NIC is required";
        if (!formData.mobile) newErrors.mobile = "Mobile number is required";
        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.purpose) newErrors.purpose = "Purpose is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            // No errors, submit the form
            console.log("Form submitted", formData);
            alert("Form submitted successfully!");
            setSubmitted(true);
            // Optionally, send the form data to a backend server
            window.location.reload();
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="visitor-reg-body">
        <div className="container mt-5 regContainer">
            <div className="regeader">
                <div className="text">Visitor Registration</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit} className="w-100">
                <div className="inputs">
                <div className="form-group input">
                        <label htmlFor="rfid">RFID Card ID:</label>
                        <input
                            type="text"
                            id="rfid"
                            name="rfid"
                            className="form-control"
                            value={formData.rfid}
                            onChange={handleChange}
                        />
                        {errors.rfid && <div className="text-danger">{errors.rfid}</div>}
                    </div>
                    <div className="form-group input">
                        <label htmlFor="fname">First Name:</label>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            className="form-control"
                            value={formData.fname}
                            onChange={handleChange}
                        />
                        {errors.fname && <div className="text-danger">{errors.fname}</div>}
                    </div>

                    <div className="form-group input">
                        <label htmlFor="lname">Last Name:</label>
                        <input
                            type="text"
                            id="lname"
                            name="lname"
                            className="form-control"
                            value={formData.lname}
                            onChange={handleChange}
                        />
                        {errors.lname && <div className="text-danger">{errors.lname}</div>}
                    </div>

                    <div className="form-group input">
                        <label htmlFor="nic">NIC:</label>
                        <input
                            type="text"
                            id="nic"
                            name="nic"
                            className="form-control"
                            value={formData.nic}
                            onChange={handleChange}
                        />
                        {errors.nic && <div className="text-danger">{errors.nic}</div>}
                    </div>

                    <div className="form-group input">
                        <label htmlFor="mobile">Mobile Number:</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            className="form-control"
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                        {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
                    </div>

                    <div className="form-group input">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="form-control"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        {errors.address && <div className="text-danger">{errors.address}</div>}
                    </div>

                    <div className="form-group input">
                        <label htmlFor="destination">Destination:</label>
                        <select
                            id="destination"
                            name="destination"
                            className="form-control"
                            value={formData.destination}
                            onChange={handleChange}
                        >
                            <option value="gymnasium">Gymnasium</option>
                            <option value="faculty">Faculty of IT</option>
                            <option value="lagaan">Lagaan</option>
                            <option value="medical">Medical Center</option>
                            <option value="sentra">Sentra Court</option>
                        </select>
                    </div>

                    <div className="form-group input">
                        <label htmlFor="purpose">Purpose of entering the UoM premises:</label>
                        <textarea
                            id="purpose"
                            name="purpose"
                            rows="4"
                            className="form-control"
                            value={formData.purpose}
                            onChange={handleChange}
                        ></textarea>
                        {errors.purpose && <div className="text-danger">{errors.purpose}</div>}
                    </div>
                </div>

                <div className="submit-container">
                    <button type="submit" className="submit btn btn-primary">Submit</button>
                </div>
            </form>

            
        
        </div>
        </div>
    )
}

export default LoginRegister;
