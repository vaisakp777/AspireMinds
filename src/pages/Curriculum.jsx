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
      

      {/* Level 1 Course */}
      <section className="level-section">
        <div className="level-header">
        
          <div className="level-info">
            <h2>Services offered</h2>
          
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
      </section>               
     
    </div>
  );
};

export default Curriculum;