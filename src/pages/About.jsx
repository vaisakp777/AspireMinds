import React from 'react';
import './About.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
const About = () => {
  const navigate=useNavigate();
  const imageUrl = import.meta.env.VITE_IMAGE_URL ;
    useEffect(() => {
      document.documentElement.scrollTop = 0; // instant jump
    }, []);
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="main-title">Welcome to Smitha's Coaching Space</h1>
              <h2 className="subtitle">Helping You Transform from Within</h2>
              <p className="hero-description">
                Discover a science-backed, soul-centered approach to create lasting transformation. 
                Whether you're feeling stuck, stressed, or seeking purpose, I help you rewrite your 
                internal story—one belief, one thought, and one habit at a time.
              </p>

            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <img src="../../images/photo2.jpg" alt="image of coach" className='image-placeholder' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Smitha Section */}
      <section className="meet-section">
        <div className="container">
          <div className="meet-content">
            <div className="meet-image">
              <div className="image-placeholder profile-image">
                <img src="../../images/photo1.jpg" alt="image of coach" className='image-placeholder profile-image' />
              </div>
            </div>
            <div className="meet-text">
              <h2 className="section-title-meet">Meet Smitha</h2>
              <p className="intro-text">
                Hi, I'm Smitha—a Cognitive Hypnotic Coach passionate about helping people 
                create inner alignment and lasting change. I specialize in working with women 
                and teens dealing with anxiety, confidence issues, and emotional overwhelm.
              </p>
              <p className="credentials-text">
                With certifications in Cognitive Hypnotic Coaching, Hypnotherapy, and NLP, 
                I blend deep subconscious work with practical coaching strategies to help you:
              </p>
              <ul className="benefits-list">
                <li>Break limiting beliefs</li>
                <li>Restructure negative thinking</li>
                <li>Regulate emotions</li>
                <li>Build new behavior patterns</li>
                <li>Set and achieve meaningful goals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What I Help With Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title centered">What I Help With</h2>
          <h3 className="services-subtitle">Core Transformation Areas</h3>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder"></div>
              </div>
              <h4 className="service-title">Thought Restructuring</h4>
              <p className="service-description">
                Break free from negative self-talk, rumination, and overthinking using 
                proven subconscious and cognitive tools.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder"></div>
              </div>
              <h4 className="service-title">Emotional Healing</h4>
              <p className="service-description">
                Learn to manage stress, anxiety, and emotional overwhelm through anchoring, 
                breathwork, and emotional reconditioning.
              </p>
            </div>
          
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder"></div>
              </div>
              <h4 className="service-title">Behaviour Change</h4>
              <p className="service-description">
                Overcome procrastination, self-sabotage, or addictive behaviors using 
                habit reprogramming and suggestion techniques.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <div className="icon-placeholder"></div>
              </div>
              <h4 className="service-title">Belief Change</h4>
              <p className="service-description">
                Identify and shift deep-rooted limiting beliefs to empower your 
                identity and actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Create Lasting Change?</h2>
            <p className="cta-description">
              Take the first step towards transformation with a complimentary discovery call.
            </p>
            <button className="cta-button-secondary" onClick={()=> navigate('/contact')}>
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;