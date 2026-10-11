import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, Phone, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ValuationResult() {
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

  const { brand, model, year, phone, estimate } = data;

  const handleConfirmPickup = () => {
    navigate('/booking-confirmed', { state: { data } });
  };

  const handleCall = (e) => {
    e.preventDefault();
    navigate('/call-initiated', { state: { data } });
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="modal-content-card" style={{ position: 'relative', width: '100%', maxWidth: '450px', margin: '0 auto', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}>
        
        <div style={{ textAlign: 'center' }}>
          <div className="modal-badge-success">
            <CheckCircle2 size={16} />
            <span>Instant Valuation Generated!</span>
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--slate-900)' }}>
            Estimated Scrap Value
          </h3>
          <p style={{ fontSize: '13.5px', color: 'var(--slate-500)' }}>
            Based on current steel scrap rate & reusable parts valuation
          </p>
        </div>

        {/* Valuation Display Box */}
        <div className="modal-valuation-box">
          <div className="modal-valuation-amount">
            {estimate?.formattedRange || '₹31,000 - ₹39,000'}
          </div>
          <div className="modal-valuation-label">
            Guaranteed Highest Price | 100% Free Doorstep Pickup
          </div>
        </div>

        {/* Vehicle Summary Details */}
        <div className="modal-details-grid">
          <div className="detail-pill-box">
            <span className="detail-label">Vehicle</span>
            <span className="detail-val">{brand} {model}</span>
          </div>
          <div className="detail-pill-box">
            <span className="detail-label">Model Year</span>
            <span className="detail-val">{year}</span>
          </div>
          <div className="detail-pill-box">
            <span className="detail-label">Registered Phone</span>
            <span className="detail-val">+91 {phone}</span>
          </div>
          <div className="detail-pill-box">
            <span className="detail-label">RTO Certificate</span>
            <span className="detail-val" style={{ color: 'var(--primary-700)' }}>Included Free</span>
          </div>
        </div>

        {/* Disclaimer Box */}
        <div style={{
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: '8px',
          padding: '10px 12px',
          marginTop: '12px',
          marginBottom: '4px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px'
        }}>
          <ShieldCheck size={16} color="#b45309" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '12.5px', color: '#92400e', margin: 0, lineHeight: 1.4 }}>
            <strong>Disclaimer:</strong> This is an estimated valuation, not a fixed price. The final offer may vary and will be confirmed only after a physical inspection of your vehicle by our executive.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
          <button 
            className="btn-primary" 
            style={{ width: '100%', padding: '14px', fontSize: '15px' }}
            onClick={handleConfirmPickup}
          >
            <span>Schedule Free Doorstep Pickup</span>
            <ArrowRight size={18} />
          </button>

          <a 
            href="#"
            onClick={handleCall}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px',
              background: 'var(--slate-100)',
              borderRadius: 'var(--radius-md)',
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--slate-800)',
              textDecoration: 'none'
            }}
          >
            <Phone size={16} color="var(--primary-600)" />
            <span>Call us: 9897270954, 9808903131</span>
          </a>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '6px', 
          marginTop: '16px',
          fontSize: '12px',
          color: 'var(--slate-500)'
        }}>
          <ShieldCheck size={14} color="var(--primary-600)" />
          <span>Government Registered RVSF Partner | Zero Liability Guarantee</span>
        </div>
      </div>
    </div>
  );
}
