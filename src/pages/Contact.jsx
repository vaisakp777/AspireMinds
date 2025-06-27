
import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, Heart, Brain, Zap, Star } from 'lucide-react';
import './Contact.css';

const Contact = () => {

  useEffect(() => {
    document.documentElement.scrollTop = 0; // instant jump
  }, []);

  return (
    <div className="contact-container">  

      {/* Contact Section */}
      <div className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p className="contact-description">
                Ready to start your transformation journey? I'm here to support you every step of the way. 
                Reach out to schedule your free discovery call or ask any questions you may have.
              </p>

              <div className="contact-details">
                <div className="contact-item-about">
                  <div className="contact-icon">
                    <Mail />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>aspiremindscoaching@gmail.com</p>
                   
                  </div>
                </div>

                <div className="contact-item-about">
                  <div className="contact-icon">
                    <Phone />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>9746859053</p>
                  </div>
                </div>

                <div className="contact-item-about">
                  <div className="contact-icon">
                    <MapPin />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Chozhan house
                    Panayur Post 
                    Athikode, Palakkad, 678552
                    Kerala</p>
                   
                  </div>
                </div>

                <div className="contact-item-about">
                  <div className="contact-icon">
                    <Clock />
                  </div>
                  <div>
                    <h4>Availability</h4>
                    <p>Monday to Saturday</p>
                    <p>10:00 AM to 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>




          {/* Call to Action */}
          <div className="final-cta">
            <h3>Your Transformation Starts Here</h3>
            <p>
              Every journey begins with a single step. Let's take that step together and create 
              the lasting change you've been seeking.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;
