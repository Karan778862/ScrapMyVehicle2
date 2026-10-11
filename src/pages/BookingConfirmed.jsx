import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle2, Home } from 'lucide-react';

export default function BookingConfirmed() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;

  useEffect(() => {
    // If no data, redirect to home
    if (!data) {
      navigate('/');
    }
  }, [data, navigate]);

  if (!data) return null;

  const { phone } = data;

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
            <CheckCircle2 size={36} />
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '8px' }}>
            Pickup Request Received!
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--slate-600)', lineHeight: '1.5', marginBottom: '20px' }}>
            Thank you! Our local vehicle evaluation officer will call you on <strong>+91 {phone}</strong> within 15 minutes to confirm your preferred date and time for inspection & instant payout.
          </p>
          
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
