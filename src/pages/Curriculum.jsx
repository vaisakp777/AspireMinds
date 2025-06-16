import React from 'react';
import './Curriculum.css';
import { useNavigate } from 'react-router-dom';
const Curriculum = () => {
  const navigate = useNavigate();
  return (
    <div className="curriculum-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-image-placeholder">
            <img src="../../images/meditation.jpg" alt="Meditation placeholder" className='meditationImg' ></img>
          </div>
          <h1 className="main-title">Cognitive Hypnotic Coaching Curriculum</h1>
          <p className="hero-description">
            Transform lives through the power of cognitive hypnotic coaching. 
            Our comprehensive curriculum blends psychological principles with 
            practical coaching techniques to create lasting change.
          </p>
          <div className="decorative-element">
            <img src="../../images/wave.jpg" alt="Decorative element" className='waveImg'></img>
          </div>
        </div>
      </section>

      {/* Level 1 Course */}
      <section className="level-section">
        <div className="level-header">
          <div className="level-number">01</div>
          <div className="level-info">
            <h2>Practitioners Course in Cognitive Hypnotic Coaching</h2>
            <p className="level-subtitle">Foundation Level - Building Your Core Skills</p>
          </div>
          <div className="level-image-placeholder">
            <img src='../../images/coaching.jpg' alt="coaching image" className='coachingImg'></img>
          </div>
        </div>

        <div className="curriculum-grid">
          {/* Psycho-Education Block 1 */}
          <div className="curriculum-card primary">
            <div className="card-icon-placeholder">
              <img src='../../images/brain.jpg' alt="Brain icon placeholder" className='card-icon'></img>
            </div>
            <h3>Psycho-Education: Foundations</h3>
            <ul>
              <li>Introduction to CHC</li>
              <li>Coaching vs Therapy</li>
              <li>Coaching Process</li>
              <li>Pre-Coaching Interviews</li>
              <li>Hypnosis and NLP
                <ul>
                  <li>History</li>
                  <li>Meaning</li>
                  <li>Myths / Misconceptions</li>
                </ul>
              </li>
              <li>Hypnosis - State or Process</li>
              <li>Depth of Hypnosis</li>
              <li>Deepening techniques</li>
            </ul>
          </div>

          {/* Psycho-Education Block 2 */}
          <div className="curriculum-card secondary">
            <div className="card-icon-placeholder">
              <img src='../../images/mind.jpg' alt="Mind icon placeholder" className='card-icon'></img>
            </div>
            <h3>Psycho-Education: Mind Dynamics</h3>
            <ul>
              <li>Working of Mind
                <ul>
                  <li>Conscious</li>
                  <li>Unconscious</li>
                  <li>Critical Filter</li>
                </ul>
              </li>
              <li>NLP Presuppositions</li>
              <li>Suggestibility
                <ul>
                  <li>Meaning</li>
                  <li>Applications</li>
                  <li>Laws</li>
                </ul>
              </li>
              <li>Emotional intelligence through FLIP</li>
            </ul>
          </div>

          {/* Psycho-Education Block 3 */}
          <div className="curriculum-card primary">
            <div className="card-icon-placeholder">
              <img src='../../images/transformation.jpg' alt="transoformation icon placeholder" className='card-icon'></img>
            </div>
            <h3>Psycho-Education: Advanced Concepts</h3>
            <ul>
              <li>Re-hypnosis</li>
              <li>Waking up process</li>
              <li>(Re)Conditioning Mind</li>
              <li>Suggestions & Imagery</li>
              <li>Positive thinking</li>
              <li>Benefits and Fallacies</li>
              <li>Meditation
                <ul>
                  <li>Meaning</li>
                  <li>Types</li>
                  <li>When not to use it</li>
                </ul>
              </li>
              <li>How to get new clients</li>
            </ul>
          </div>

          {/* Hypnotic Inductions */}
          <div className="curriculum-card accent">
            <div className="card-icon-placeholder"><img src="../../images/positive.jpg" alt="Hypnosis icon placeholder" className='card-icon'></img></div>
            <h3>Hypnotic Inductions</h3>
            <ul>
              <li>Balloon Book</li>
              <li>Hand Movement</li>
              <li>Hand Magnetism</li>
              <li>Hand-shake</li>
              <li>Betty Erickson</li>
              <li>Reverse Count</li>
              <li>Arm Raising</li>
              <li>Auto Dual</li>
              <li>Dave Elman</li>
              <li>Past Experience</li>
            </ul>
          </div>

          {/* Diagnostic Techniques */}
          <div className="curriculum-card secondary">
            <div className="card-icon-placeholder"><img src="../../images/assess.jpg" alt="Diagnostic icon placeholder" className='card-icon'></img></div>
            <h3>Diagnostic Techniques</h3>
            <ul>
              <li>Coaching Models
                <ul>
                  <li>GROW | TGROW</li>
                  <li>REGROW | SOFT-SEA</li>
                </ul>
              </li>
              <li>ABCDE Model</li>
              <li>SQR Model</li>
              <li>FLIP</li>
              <li>Breakdown Cycle</li>
              <li>Body Syndrome</li>
              <li>Questioning Self</li>
            </ul>
          </div>

          {/* Change Processes */}
          <div className="curriculum-card accent">
            <div className="card-icon-placeholder"><img src="../../images/change.jpg" alt="Change Processes icon placeholder" className='card-icon'></img></div>
            <h3>Change Processes</h3>
            <ul>
              <li>If-Then for thought restructuring</li>
              <li>Anchoring for emotional conditioning</li>
              <li>Hypnotic Suggestions</li>
              <li>Complete Sequence for holistic change</li>
              <li>Self-hypnosis</li>
              <li>Meditation</li>
            </ul>
          </div>
        </div>

        {/* Level 1 Outcomes */}
        <div className="outcomes-section">
          <div className="outcomes-image-placeholder">
            <img src='../../images/success.jpg' alt="Success image placeholder" className='outcomes-image-placeholder'></img>
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
      <section className="transition-section">
        <div className="transition-content">
          <div>
            <img src='../../images/path.jpg' alt="path image placeholder" className='transition-image-placeholder'></img>
          </div>
          <h2>Ready to advance your practice?</h2>
          <p>Take your skills to the next level with our advanced practitioner course</p>
        </div>
      </section>

      {/* Level 2 Course */}
      <section className="level-section level-2">
        <div className="level-header">
          <div className="level-number">02</div>
          <div className="level-info">
            <h2>Advanced Practitioners Course in Cognitive Hypnotic Coaching</h2>
            <p className="level-subtitle">Advanced Level - Mastering Professional Practice</p>
          </div>
          <img src='../../images/coaching2.jpg' alt="Advanced coaching image" className='coachingImg'></img>
        </div>

        <div className="curriculum-grid">
          {/* Advanced Psycho-Education */}
          <div className="curriculum-card primary">
            <div className="card-icon-placeholder">[Advanced learning icon placeholder]</div>
            <h3>Advanced Psycho-Education</h3>
            <ul>
              <li>Success Principles</li>
              <li>Moving beyond scripts with Ericksonian model</li>
              <li>Specific & Vague language</li>
              <li>Communication at level of conscious & unconscious</li>
              <li>Calibration and Utilization</li>
              <li>Advanced Rapport Building</li>
              <li>Pacing and leading</li>
              <li>Mindfulness</li>
              <li>Sensory Acuity</li>
              <li>Modelling</li>
            </ul>
          </div>

          {/* System Access */}
          <div className="curriculum-card secondary">
            <div className="card-icon-placeholder">[System/network icon placeholder]</div>
            <h3>System Access & Representation</h3>
            <ul>
              <li>Lead system & accessing cues</li>
              <li>Representation system</li>
              <li>Surface & Deep structure of Language</li>
              <li>Objectives of Coaching</li>
              <li>Coaching session flow</li>
              <li>Coaching Documentation</li>
              <li>State management of Coach</li>
              <li>Understanding Behaviours as unconscious strategies</li>
              <li>Change vs transformations</li>
              <li>Beliefs, values, identity</li>
            </ul>
          </div>

          {/* Internal Resources */}
          <div className="curriculum-card accent">
            <div className="card-icon-placeholder">[Inner resources icon placeholder]</div>
            <h3>Internal Resourcing</h3>
            <ul>
              <li>Positive Intentions</li>
              <li>Relapses</li>
            </ul>
          </div>

          {/* Advanced Inductions */}
          <div className="curriculum-card primary">
            <div className="card-icon-placeholder">[Advanced technique icon placeholder]</div>
            <h3>Advanced Hypnotic Inductions</h3>
            <ul>
              <li>Conversational Hypnosis</li>
              <li>Mindfulness</li>
              <li>Finger Signals</li>
              <li>Black out</li>
              <li>Mommy take this away</li>
            </ul>
          </div>

          {/* Advanced Diagnostics */}
          <div className="curriculum-card secondary">
            <div className="card-icon-placeholder">[Advanced analysis icon placeholder]</div>
            <h3>Advanced Diagnostic Techniques</h3>
            <ul>
              <li>Ecological Goal setting</li>
              <li>Metaphors
                <ul>
                  <li>Abstract Drawing</li>
                  <li>Revelation</li>
                  <li>Introspection</li>
                  <li>Dreams interpretation</li>
                </ul>
              </li>
              <li>Meta Models</li>
              <li>Perceptual Positions</li>
            </ul>
          </div>

          {/* Advanced Change Processes */}
          <div className="curriculum-card accent">
            <div className="card-icon-placeholder">[Transformation mastery icon placeholder]</div>
            <h3>Advanced Change Processes</h3>
            <ul>
              <li>Metaphors</li>
              <li>Conversational Control</li>
              <li>Transformational Story telling</li>
              <li>N-Step Reframing</li>
              <li>Parts Integration</li>
              <li>Sub-modalities
                <ul>
                  <li>Swish</li>
                  <li>Quick Belief Change Process</li>
                  <li>White out</li>
                </ul>
              </li>
              <li>6 Levels of Transformation</li>
            </ul>
          </div>
        </div>

        {/* Level 2 Outcomes */}
        <div className="outcomes-section">
          <img src="../../images/outcome.jpg" alt="Outcomes image" className="outcomes-image-placeholder">
            
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
          <img src="../../images/goal.jpg" alt="CTA Image" className="cta-image-placeholder" />
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