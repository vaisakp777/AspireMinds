import React from 'react';
import './Home.css';
import { useEffect } from 'react';
const Home= () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0; // instant jump
  }, []);
  return (
    <div className="body">
      <div>
        <h1 className="title">HOME</h1>
      </div>
      
    </div>
  );
};

export default Home;