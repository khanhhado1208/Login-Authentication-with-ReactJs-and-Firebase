import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import NavBar from "../public/NavBar";
import { writeValue, readValue } from '../firestore';

const Dashboard = () => {
  const user = auth.currentUser;
  const [selectedMode, setSelectedMode] = useState('control');
  const [isOn, setIsOn] = useState(false);
  //const [count, setCount] = useState(0);
  const [count, setCount] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }); 

  useEffect(() => {
    const fetchCount = async () => {
        const timerValue = await readValue();
        setCount(timerValue);
    };
    fetchCount();
  }, []);

  const startTimer = () => {
    setIsOn(true);
    writeValue(count);
  }

  const stopTimer = () => {
    setIsOn(false);
  }

  const resetTimer = () => {
    setCount(0);
    setIsOn(false);
  }

  useEffect(() => {
    let intervalId;
    if (selectedMode === 'control' && isOn) {
      intervalId = setInterval(() => {
        setCount(count => count + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [selectedMode, isOn, count]);

  const toggleOnOff = () => {
    setIsOn(!isOn);
    if (selectedMode === 'control') {
      if (isOn) {
        stopTimer();
        writeValue(count);
      } else {
        startTimer();
      }
    }
  };

  const formatTime = (count) => {
    
    const days = Math.floor(count /(3600 * 24));
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = count % 60;

    return `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const formattedTime = formatTime(count);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-md-8 text-center">
            <h1>Remote Control Mode</h1>
            <p className="fs-5">
              Welcome, <em className="text-decoration-underline">{user.email}</em>
            </p>
            <p className="fs-5">
            Follow the dashboard to track and monitor the operation time of the Hosit with ease. We're here to make your hoisting operations more efficient and convenient.
            </p>
            <div className="card p-4 py-4">
              <h4 className="mb-3"><small>Content for Remote Control Mode</small></h4>
              {
                
               <p className="fs-2 mb-4">Timer Value: {formattedTime}</p>
              }
              
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className={`btn btn-lg ${isOn ? 'btn-danger' : 'btn-success'} me-2`}
                  onClick={toggleOnOff}
                  style={{ width: "20%" }}
                >
                  {isOn ? 'Off' : 'On'}
                </button>
                <button
                  className="btn btn-lg btn-warning"
                  onClick={resetTimer}
                  style={{ width: "20%" }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
