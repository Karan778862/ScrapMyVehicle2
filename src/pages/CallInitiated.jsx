import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Home, Phone } from 'lucide-react';

export default function CallInitiated() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="modal-content-card" style={{ position: 'relative', width: '100%', maxWidth: '450px', margin: '0 auto', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}>
        
        <div style={{ textAlign: 'center', padding: '20px 10px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'var(--primary-50)',
            color: 'var(--primary-600)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <PhoneCall size={32} />
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '12px' }}>
            Thanks for reaching out!
          </h3>
          <p style={{ fontSize: '15px', color: 'var(--slate-600)', lineHeight: '1.5', marginBottom: '24px' }}>
            If your call didn't connect automatically, you can reach our team directly at the numbers below:
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            <a 
              href="tel:9897270954"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px',
                background: 'var(--slate-100)',
                borderRadius: 'var(--radius-md)',
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--slate-800)',
                textDecoration: 'none'
              }}
            >
              <Phone size={18} color="var(--primary-600)" />
              <span>+91 9897270954</span>
            </a>
            
            <a 
              href="tel:9808903131"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px',
                background: 'var(--slate-100)',
                borderRadius: 'var(--radius-md)',
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--slate-800)',
                textDecoration: 'none'
              }}
            >
              <Phone size={18} color="var(--primary-600)" />
              <span>+91 9808903131</span>
            </a>
          </div>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <button 
              className="btn-primary" 
              style={{ width: '100%', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <Home size={18} />
              <span>Back to Home</span>
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
