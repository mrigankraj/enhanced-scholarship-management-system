import React, { useState } from 'react';
import axios from 'axios';

function ApplicationForm() {
    const [scholarship, setScholarship] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        await axios.post('http://localhost:5000/api/applications', { scholarship }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        alert('Application submitted');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Apply for Scholarship</h1>
            <input type="text" placeholder="Scholarship" value={scholarship} onChange={(e) => setScholarship(e.target.value)} required />
            <button type="submit">Apply</button>
        </form>
    );
}

export default ApplicationForm;
