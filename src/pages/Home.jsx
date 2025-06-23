
import React from 'react';
import './Home.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    useEffect(() => {
    document.documentElement.scrollTop = 0; // instant jump
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="content-wrapper">
          <div className="hero-content">
            <h1 className="main-title">
              Welcome to Your Journey of 
              <span className="highlight"> Inner Transformation</span>
            </h1>
            
            <div className="subtitle-container">
              <h2 className="subtitle">
                With Smitha – Certified Cognitive Hypnotic Coach
              </h2>
            </div>
            
            <div className="description">
              <p className="intro-text">
                Life can sometimes feel overwhelming—stress, anxiety, emotional pain, or lack of direction can leave us feeling lost or stuck. But the truth is, <strong>the power to shift your reality lies within you.</strong>
              </p>
              
              <p className="service-text">
                As a Cognitive Hypnotic Coach, I specialize in helping you tap into your subconscious mind to bring about deep and lasting transformation.
              </p>
              
              <p className="support-text">
                Whether you're struggling with self-doubt, emotional baggage, unhealthy habits, or simply want to grow and evolve—I'm here to guide you every step of the way.
              </p>
            </div>
            
            <div className="cta-section">
              <button className="cta-primary" onClick={()=>navigate("/contact")}>
                Begin Your Transformation
              </button>
              <button className="cta-secondary" onClick={()=>navigate("/about")}>
                Learn More About My Approach
              </button>
            </div>
          </div>
          

        </div>
      </div>
      
      <div className="features-section">
        <div className="content-wrapper">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
                  <path d="M16 8c0-2.21-1.79-4-4-4s-4 1.79-4 4"/>
                </svg>
              </div>
              <h3>Subconscious Reprogramming</h3>
              <p>Access the deeper layers of your mind to create lasting change from within.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 13l3 3 7-7"/>
                  <path d="M12 3v6l4-4"/>
                  <path d="M12 21v-6l-4 4"/>
                  <path d="M3 12h6l-4-4"/>
                  <path d="M21 12h-6l4 4"/>
                </svg>
              </div>
              <h3>Personal Growth</h3>
              <p>Unlock your potential and develop the mindset needed for continuous evolution.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                  <path d="M8 12h8"/>
                  <path d="M12 8v8"/>
                </svg>
              </div>
              <h3>Goal Achievement</h3>
              <p>Transform limiting beliefs and align your actions with your deepest aspirations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;