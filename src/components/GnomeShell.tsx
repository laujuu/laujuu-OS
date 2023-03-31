import React, { useState, useEffect } from 'react';
import '../pages/css/GnomeShell.css'


const GnomeShell = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <header className="gnome-shell">
        <div className="left-panel"></div>
        <div className="center-panel">
          <span className="clock">{time.toLocaleTimeString()}</span>
        </div>
        <div className="right-panel">
          <button className="button"></button>
          <button className="button"></button>
        </div>
      </header>
    );
  };
  
  export default GnomeShell;
