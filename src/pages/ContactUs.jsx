import React, { useEffect, useState } from 'react';
import { PhoneCall, Mail, MapPin, Clock, Car, Zap, CheckCircle2 } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import { submitLead } from '../utils/leadService';

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitLead({
        FormType: 'Contact Us',
        Name: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        Message: formData.message
      });
      
      alert('Thank you! Your request has been received. Our team will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      {/* Contact Header */}
      <div className="contact-page-header">
        <div className="container">
          <span className="contact-badge">We're Here to Help</span>
          <h1>Get in Touch with Us</h1>
          <p>Ready to scrap your vehicle? Request a callback and our expert team will assist you immediately.</p>
        </div>
      </div>

      <div className="container">
        {/* Split Contact Block */}
        <div className="contact-split-box">
          {/* Left Side: Info */}
          <div className="contact-info-panel">
            <h2>Get In Touch</h2>
            <p className="contact-panel-desc">We offer India's most trusted, hassle-free scrapping experience.</p>
            
            <div className="contact-feature-list">
              <div className="contact-feature">
                <div className="cf-icon"><Zap size={20} /></div>
                <div>
                  <h4>Quick Response</h4>
                  <p>We respond within 15 minutes</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="cf-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Pan-India Service</h4>
                  <p>Serving across major cities</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="cf-icon"><Car size={20} /></div>
                <div>
                  <h4>All Vehicle Types</h4>
                  <p>Cars, Bikes, Commercial Vehicles</p>
                </div>
              </div>
            </div>

            <hr className="contact-divider" />

            <div className="contact-direct-details">
              <a href="tel:9897270954" className="cd-link">
                <PhoneCall size={18} /> 9897270954, 9808903131
              </a>
              <a href="mailto:scrapmyvehiclesindia@gmail.com" className="cd-link">
                <Mail size={18} /> scrapmyvehiclesindia@gmail.com
              </a>
              <div className="cd-link">
                <Clock size={18} /> Mon - Sat, 9AM - 7PM
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-panel">
            <h2>Request a Callback</h2>
            <form className="contact-page-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name*</label>
                <input type="text" placeholder="John Doe" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Your Email*</label>
                <input type="email" placeholder="john@example.com" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Phone No.*</label>
                <input type="tel" placeholder="+91 9876543210" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Tell us about your vehicle..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="btn-contact-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Request a Callback'}
              </button>
            </form>
          </div>
        </div>



      </div>
      
      {/* Reusing existing FAQ component at the bottom */}
      <FAQSection limit={5} />
    </div>
  );
}
