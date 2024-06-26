import React, { useState, useEffect } from 'react';
import './Table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { mockData } from './data';

const SubmittedFormsTable = () => {
  const [submittedForms, setSubmittedForms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const recordsPerPage = 15;

  useEffect(() => {
    
    setSubmittedForms(mockData);
    setLoading(false);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => 
      regex.test(part) ? <span key={index} className="highlight">{part}</span> : part
    );
  };

  const filteredForms = submittedForms.filter(form => 
    Object.values(form).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const displayedForms = filteredForms.slice(0, currentPage * recordsPerPage);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">Error: {error}</div>;
  }

  return (
    <div className='table-body'>
      <div className='searchBar'>
        <input
          type="text"
          placeholder="Search..."
          className="form-control mb-3 search-bar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        </div>
      <div className="container mt-5 user-table">
        <h2 className="text-center">Submitted Forms</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Form No.</th>
              <th>RFID Card ID</th>
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
            {displayedForms.map(form => (
              <tr key={form.id}>
                <td>{highlightMatch(form.id.toString(), searchQuery)}</td>
                <td>{highlightMatch(form.rfid, searchQuery)}</td>
                <td>{highlightMatch(form.fname, searchQuery)}</td>
                <td>{highlightMatch(form.lname, searchQuery)}</td>
                <td>{highlightMatch(form.nic, searchQuery)}</td>
                <td>{highlightMatch(form.mobile, searchQuery)}</td>
                <td>{highlightMatch(form.address, searchQuery)}</td>
                <td>{highlightMatch(form.destination, searchQuery)}</td>
                <td>{highlightMatch(form.purpose, searchQuery)}</td>
                <td>{highlightMatch(form.date, searchQuery)}</td>
                <td>{highlightMatch(form.time, searchQuery)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {displayedForms.length < filteredForms.length && (
          <div className="text-center mt-3">
            <button className="btn btn-primary load-more" onClick={handleLoadMore}>Load More</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmittedFormsTable;
