import React, { useState, useEffect } from 'react';
import './Section.scss';

const Section = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [joinedCount, setJoinedCount] = useState(35000);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactUsClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMessage("Whoops, make sure it's an email");
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage('Email sent');
    }
  };

  useEffect(() => {
    const totalSteps = 20;
    const decrementPerStep = joinedCount / totalSteps;

    const intervalId = setInterval(() => {
      setJoinedCount((prevCount) => Math.max(0, prevCount - decrementPerStep));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="section-container">
      <div className="background-section">
        <h2>{Math.round(joinedCount).toLocaleString()} ALREADY JOINED</h2>
        <h1>Stay up-to-date with what we're doing</h1>
        <div className="input-container">
          <div className={`wrapper ${successMessage ? 'success' : ''}`}>
            <input
              type="text"
              placeholder="Enter your email address"
              value={email}
              onChange={handleInputChange}
            />

            {errorMessage && <p className="error-message"><i>{errorMessage}</i></p>}
            {successMessage && <p className="success-message"><i>{successMessage}</i></p>}
          </div>

          <button onClick={handleContactUsClick}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
