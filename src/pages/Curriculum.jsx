import React from 'react';
import './Curriculum.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Curriculum = () => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL ;
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTop = 0; // instant jump
  }, []);
  return (
    <div className="curriculum-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-image-placeholder">
            <img src={imageUrl+"meditation.jpg"} alt="Meditation placeholder" className='meditationImg' ></img>
          </div>
          <h1 className="main-title">Cognitive Hypnotic Coaching Curriculum</h1>
          <p className="hero-description">
            Transform lives through the power of cognitive hypnotic coaching. 
            Our comprehensive curriculum blends psychological principles with 
            practical coaching techniques to create lasting change.
          </p>
          <div className="decorative-element">
            
          </div>
        </div>
      </section>

      {/* Level 1 Course */}
      <section className="level-section">
        <div className="level-header">
        
          <div className="level-info">
            <h2>Practitioners Course in Cognitive Hypnotic Coaching</h2>
            <p className="level-subtitle">As a Cognitive Hypnotic Coach, I offer personalized coaching and transformation programs designed to empower you to break through limitations, heal emotionally, and create lasting change from within.
</p>
          </div>
          <div className="level-image-placeholder">
            <img src={imageUrl+"coaching.jpg"} alt="coaching image" className='coachingImg'></img>
          </div>
        </div>
        <div className="curriculum-grid">
          <div className="curriculum-card secondary">
            <div className="card-icon-placeholder"><img src={imageUrl+"peaceful.jpg"} alt="System Access icon placeholder" className='card-icon'></img></div>
            <h3>
            Helping teens overcome stress, anxiety, and concentration issues while boosting focus, confidence, and motivation in academics.</h3>
           
          </div>
        
          <div className="curriculum-card primary">
            <div className="card-icon-placeholder"><img src={imageUrl+"positive.jpg"} alt="Hypnosis icon placeholder" className='card-icon'></img></div>
            <h3>
            Break unwanted habits like procrastination, overeating, nail-biting, etc., and install empowering new patterns of behavior.
            </h3>
          
          </div>

          {/* Psycho-Education Block 2 */}
          
        </div>
        <div className="curriculum-grid">
          {/* Psycho-Education Block 3 */}
          <div className="curriculum-card primary">
            <div className="card-icon-placeholder">
              <img src={imageUrl+"transformation.jpg"} alt="transoformation icon placeholder" className='card-icon'></img>
            </div>
            <h3>
            Overcome self-doubt, fear of judgment, and inner criticism. Step into a confident, authentic version of yourself.
            </h3>
          </div>
          
                  <div className="curriculum-card secondary">
            <div className="card-icon-placeholder">
              <img src={imageUrl+"mind.jpg"} alt="Mind icon placeholder" className='card-icon'></img>
            </div>
            <h3>
            Heal unresolved emotions, past traumas, and inner conflicts that block your progress and peace of mind.
            </h3>
         
          </div>
        </div>

        <div className="curriculum-grid">
          {/* Diagnostic Techniques */}
          <div className="curriculum-card secondary">
            <div className="card-icon-placeholder"><img src={imageUrl+"assess.jpg"} alt="Diagnostic icon placeholder" className='card-icon'></img></div>
            <h3>Identify and shift limiting thoughts and deep-rooted beliefs that keep you stuck—align your mind with your goals and values.
            </h3>
         
          </div>
                    {/* Advanced Psycho-Education */}
          <div className="curriculum-card primary">
            <div className="card-icon-placeholder"><img src={imageUrl+"path.jpg"} alt="Meditation icon placeholder" className='card-icon'></img></div>
            <h3>
            Clarify your life and career goals, remove mental blocks, and stay motivated with a clear subconscious alignment.

            </h3>
         
          </div>

        </div>
        <div className="curriculum-grid">
                    {/* Change Processes */}
          <div className="curriculum-card primary">
            <div className="card-icon-placeholder"><img src={imageUrl+"change.jpg"} alt="Change Processes icon placeholder" className='card-icon'></img></div>
            <h3>Special support for women dealing with life transitions—career changes, motherhood, empty nest, or midlife re-evaluation—with empathy and empowerment.
          </h3>
          
          </div>
          {/* System Access */}
            {/* Psycho-Education Block 1 */}
      
          <div className="curriculum-card secondary">
            <div className="card-icon-placeholder">
              <img src={imageUrl+"brain.jpg"} alt="Brain icon placeholder" className='card-icon'></img>
            </div>
            <h3>
              Release chronic stress, anxiety, and emotional overload using deep relaxation, anchoring, and subconscious reprogramming techniques
              
            </h3>

          </div>

          
        </div>
        {/* Level 1 Outcomes */}
        <div className="outcomes-section">
          <div className="outcomes-image-placeholder">
            <img src={imageUrl+'success.jpg'} alt="Success image placeholder" className='outcomes-image-placeholder'></img>
          </div>
          <div className="outcomes-content">
            <h3>What you can achieve after Level 1</h3>
            <p>You will be able to induce any willing person in a deep hypnotic trance and help yourself and others in many ways:</p>
            
            <div className="outcomes-grid">
              <div className="outcome-group">
                <ul>
                  <li>Deep Relaxation</li>
                  <li>Confidence Building</li>
                  <li>Emotional Intelligence</li>
                  <li>Goal setting</li>
                  <li>Goal accomplishment</li>
                  <li>Emotional Re-conditioning</li>
                </ul>
              </div>
              <div className="outcome-group">
                <ul>
                  <li>Stage Fears</li>
                  <li>Stress Management</li>
                  <li>Developing Self-esteem</li>
                  <li>Sustain Motivation</li>
                  <li>Developing Focus</li>
                  <li>Performance improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Section */}


      {/* Level 2 Course */}
      <section className="level-section level-2">
        
        

        {/* Level 2 Outcomes */}
        <div className="outcomes-section">
          <img src={imageUrl + "outcome.jpg"} alt="Outcomes image" className="outcomes-image-placeholder">
            
          </img>
          <div className="outcomes-content">
            <h3>What you can achieve after Level 2</h3>
            <p>Techniques covered in this level will help you achieve Level 1 outcomes in half the time and also work with:</p>
            
            <div className="outcomes-grid">
              <div className="outcome-group">
                <ul>
                  <li>Advanced Behavioural Management</li>
                  <li>Breaking destructive habits</li>
                  <li>Performance Improvement</li>
                  <li>Advanced Goal accomplishment</li>
                </ul>
              </div>
              <div className="outcome-group">
                <ul>
                  <li>Overall Life coaching</li>
                  <li>Weight management</li>
                  <li>Pain Management</li>
                  <li>Overcoming Relapse</li>
                </ul>
              </div>
            </div>
            
            <p className="additional-info">
              You will also learn the application of hypnosis in marketing, 
              sales, content development and training.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <img src={imageUrl + "/goal.jpg"} alt="CTA Image" className="cta-image-placeholder" />
          <h2>Begin Your Transformation Journey</h2>
          <p>Join thousands of successful practitioners who have transformed their lives and the lives of others through cognitive hypnotic coaching.</p>
          <div className="cta-buttons">
            <button className="primary-btn" onClick={() => navigate('/contact')} >Enroll in Level 1</button>
            <button className="secondary-btn" onClick={()=> navigate('/about')}>Learn More</button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Curriculum;