import React, { useState, useEffect } from 'react';
import './Table.css'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const SubmittedFormsTable = () => {
  const [submittedForms, setSubmittedForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Mock data for testing
    const mockData = [
      { id: 1, fname: 'John', lname: 'Doe', nic: '123456789V', mobile: '1234567890', address: '123 Main St', destination: 'Gymnasium', purpose: 'Workout', date: '2024-06-21', time: '09:00 AM' },
      { id: 2, fname: 'Jane', lname: 'Smith', nic: '987654321V', mobile: '0987654321', address: '456 Elm St', destination: 'Faculty of IT', purpose: 'Study', date: '2024-06-21', time: '10:30 AM' },
      { id: 3, fname: 'Mike', lname: 'Johnson', nic: '111222333V', mobile: '1112223334', address: '789 Oak St', destination: 'Medical Center', purpose: 'Checkup', date: '2024-06-22', time: '11:45 AM' },
      { id: 4, fname: 'Emily', lname: 'Brown', nic: '444555666V', mobile: '4445556667', address: '567 Pine St', destination: 'Gymnasium', purpose: 'Exercise', date: '2024-06-22', time: '02:00 PM' },
      { id: 5, fname: 'David', lname: 'Wilson', nic: '777888999V', mobile: '7778889990', address: '890 Cedar St', destination: 'Faculty of IT', purpose: 'Teaching', date: '2024-06-23', time: '09:30 AM' },
      { id: 6, fname: 'Sophia', lname: 'Martinez', nic: '121314151V', mobile: '1213141516', address: '234 Birch St', destination: 'Medical Center', purpose: 'Consultation', date: '2024-06-23', time: '01:15 PM' },
      { id: 7, fname: 'Ethan', lname: 'Garcia', nic: '161718192V', mobile: '1617181920', address: '678 Maple St', destination: 'Gymnasium', purpose: 'Fitness', date: '2024-06-24', time: '10:00 AM' },
      { id: 8, fname: 'Olivia', lname: 'Lopez', nic: '212223242V', mobile: '2122232425', address: '456 Pine St', destination: 'Faculty of IT', purpose: 'Research', date: '2024-06-24', time: '03:30 PM' },
      { id: 9, fname: 'Alexander', lname: 'Hernandez', nic: '252627282V', mobile: '2526272829', address: '123 Elm St', destination: 'Medical Center', purpose: 'Treatment', date: '2024-06-25', time: '11:00 AM' },
      { id: 10, fname: 'Isabella', lname: 'Gonzalez', nic: '293031323V', mobile: '2930313230', address: '789 Cedar St', destination: 'Gymnasium', purpose: 'Training', date: '2024-06-25', time: '01:45 PM' },
      { id: 11, fname: 'William', lname: 'Perez', nic: '333435363V', mobile: '3334353637', address: '890 Birch St', destination: 'Faculty of IT', purpose: 'Meeting', date: '2024-06-26', time: '10:30 AM' },
      { id: 12, fname: 'Sophie', lname: 'Roberts', nic: '363738394V', mobile: '3637383940', address: '567 Oak St', destination: 'Gymnasium', purpose: 'Workout', date: '2024-06-26', time: '03:00 PM' },
      { id: 13, fname: 'Lucas', lname: 'Gray', nic: '394041424V', mobile: '3940414241', address: '123 Pine St', destination: 'Faculty of IT', purpose: 'Study', date: '2024-06-27', time: '09:15 AM' },
      { id: 14, fname: 'Ava', lname: 'Evans', nic: '424344454V', mobile: '4243444542', address: '456 Elm St', destination: 'Medical Center', purpose: 'Checkup', date: '2024-06-27', time: '01:30 PM' },
      { id: 15, fname: 'Noah', lname: 'Young', nic: '454647484V', mobile: '4546474843', address: '789 Cedar St', destination: 'Gymnasium', purpose: 'Exercise', date: '2024-06-28', time: '11:45 AM' },
    ];

    setSubmittedForms(mockData);
  }, []);

    // Fetch submitted forms data from the backend
    /*axios.get('http://localhost:5000/api/submitted-forms')
      .then(response => {
        setSubmittedForms(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">Error: {error}</div>;
  } */

  return (
    <div className='table-body'>
    <div className="container mt-5 user-table">
      <h2 className="text-center">Submitted Forms</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>NIC</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Destination</th>
            <th>Purpose</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {submittedForms.map(form => (
            <tr key={form.id}>
              <td>{form.id}</td>
              <td>{form.fname}</td>
              <td>{form.lname}</td>
              <td>{form.nic}</td>
              <td>{form.mobile}</td>
              <td>{form.address}</td>
              <td>{form.destination}</td>
              <td>{form.purpose}</td>
              <td>{form.date}</td>
              <td>{form.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default SubmittedFormsTable;
