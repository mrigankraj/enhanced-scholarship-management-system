import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import ApplicationForm from './components/ApplicationForm';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/apply" element={<ApplicationForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
