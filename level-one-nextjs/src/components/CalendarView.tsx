'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGO_URL } from '@/data/siteData';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

interface CalendarViewProps {
  visible: boolean;
  pricingTier?: string | null;
  onClose: () => void;
}

export default function CalendarView({ visible, pricingTier, onClose }: CalendarViewProps) {
  const [step, setStep] = useState<'form' | 'calendar' | 'confirm' | 'thanks'>('form');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', location: '', website: '' });
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = ['9:00am', '10:00am', '11:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm'];
  const timeValues = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

  const isFormValid = formData.name && formData.email && formData.phone && formData.company && formData.location;

  const handleClose = useCallback(() => {
    setStep('form');
    setFormData({ name: '', email: '', phone: '', company: '', location: '', website: '' });
    setSelectedDate(null);
    setSelectedTime(null);
    onClose();
  }, [onClose]);

  const renderCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const today = new Date();
    const cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} className="cal-day empty" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const cellDate = new Date(currentYear, currentMonth, day);
      const isPast = cellDate < today;
      const isWeekend = cellDate.getDay() === 0 || cellDate.getDay() === 6;
      const isDisabled = isPast || isWeekend;
      const isSelected = selectedDate && cellDate.toDateString() === selectedDate.toDateString();

      cells.push(
        <div
          key={day}
          className={`cal-day ${isDisabled ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
          onClick={() => !isDisabled && setSelectedDate(cellDate)}
        >
          {day}
        </div>
      );
    }
    return cells;
  };

  const handleConfirm = () => {
    // Send to webhook
    const webhookData = {
      name: formData.name, email: formData.email, phone: formData.phone,
      company: formData.company, location: formData.location,
      website: formData.website || 'Not provided',
      appointmentDate: selectedDate?.toLocaleDateString('en-GB'),
      appointmentTime: selectedTime,
      pricingTier: pricingTier || 'Not specified',
      timestamp: new Date().toISOString(),
    };

    fetch('https://hook.eu2.make.com/YOUR_WEBHOOK_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(webhookData),
    }).catch(() => {});

    setStep('confirm');
  };

  if (!visible) return null;

  return (
    <motion.div
      className="calendar-view-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="section-inner" style={{ paddingBottom: '5rem' }}>
        <button className="cal-back-btn" onClick={handleClose}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 1L5 8l6 7" /></svg>
          Back to Home
        </button>

        {step === 'form' && (
          <div className="cal-form-container">
            <div className="cal-form-side">
              <div className="cal-hex-logo">
                <div className="cal-hex-outer"><div className="cal-hex-inner">
                  <img src={LOGO_URL} alt="Level One" />
                </div></div>
              </div>
            </div>
            <div className="cal-form-center">
              <h1 className="cal-form-title">Book A Call</h1>
              <p className="cal-form-sub">Schedule your revenue infrastructure assessment.</p>
              <div className="cal-field">
                <label>Full Name</label>
                <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" />
              </div>
              <div className="cal-field-row">
                <div className="cal-field">
                  <label>Email</label>
                  <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" type="email" />
                </div>
                <div className="cal-field">
                  <label>Phone</label>
                  <input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+44" type="tel" />
                </div>
              </div>
              <div className="cal-field">
                <label>Company</label>
                <input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Company Name" />
              </div>
              <div className="cal-field">
                <label>City/Area</label>
                <input value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="e.g. Edinburgh, Glasgow" />
              </div>
              <div className="cal-field">
                <label>Website</label>
                <input value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} placeholder="https://" type="url" />
              </div>
            </div>
            <div className="cal-form-side">
              <button className="cal-next-btn" disabled={!isFormValid} onClick={() => setStep('calendar')}>Select Time</button>
            </div>
          </div>
        )}

        {step === 'calendar' && (
          <div className="cal-main-container">
            <div className="cal-info-panel">
              <div className="cal-hex-logo cal-hex-logo-sm">
                <div className="cal-hex-outer"><div className="cal-hex-inner">
                  <img src={LOGO_URL} alt="Level One" />
                </div></div>
              </div>
              <div className="cal-info-item"><span className="cal-info-dot" /><span>{formData.name}</span></div>
              <div className="cal-info-item"><span className="cal-info-dot" /><span>{formData.email}</span></div>
              <div className="cal-info-item"><span className="cal-info-dot" /><span>{formData.company}</span></div>
              <div className="cal-info-item"><span className="cal-info-dot" /><span>{formData.location}</span></div>
              {pricingTier && <div className="cal-info-item"><span className="cal-info-dot" /><span>{pricingTier}</span></div>}
            </div>
            <div className="cal-calendar-panel">
              <div className="cal-calendar-header">
                <h2>{monthNames[currentMonth]} {currentYear}</h2>
                <div className="cal-nav-btns">
                  <button onClick={() => { if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); } else setCurrentMonth(currentMonth - 1); }}>‹</button>
                  <button onClick={() => { if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); } else setCurrentMonth(currentMonth + 1); }}>›</button>
                </div>
              </div>
              <div className="cal-weekdays">
                {['SUN','MON','TUE','WED','THU','FRI','SAT'].map(d => <div key={d}>{d}</div>)}
              </div>
              <div className="cal-grid">{renderCalendar()}</div>
            </div>
            <div className="cal-time-panel">
              <div className="cal-time-header">
                {selectedDate ? selectedDate.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Select a date'}
              </div>
              <div className="cal-time-slots">
                {timeSlots.map((slot, idx) => (
                  <div
                    key={slot}
                    className={`cal-time-slot ${selectedTime === timeValues[idx] ? 'selected' : ''}`}
                    onClick={() => setSelectedTime(timeValues[idx])}
                  >
                    {slot}
                  </div>
                ))}
              </div>
              <button className="cal-confirm-btn" disabled={!selectedDate || !selectedTime} onClick={handleConfirm}>
                Confirm Audit
              </button>
            </div>
          </div>
        )}

        {(step === 'confirm' || step === 'thanks') && (
          <div className="cal-modal-overlay">
            <div className="cal-modal">
              {step === 'confirm' ? (
                <>
                  <h2 className="cal-modal-title">Growth Audit Confirmed</h2>
                  <div className="cal-modal-info">
                    <div className="cal-modal-row"><span>Name:</span><span>{formData.name}</span></div>
                    <div className="cal-modal-row"><span>Audit Date:</span><span>{selectedDate?.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></div>
                    <div className="cal-modal-row"><span>Audit Time:</span><span>{selectedTime}</span></div>
                  </div>
                  <button className="cal-next-btn" onClick={() => { setStep('thanks'); setTimeout(handleClose, 3000); }}>Complete</button>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div className="cal-hex-logo" style={{ margin: '0 auto 1.5rem' }}>
                    <div className="cal-hex-outer"><div className="cal-hex-inner">
                      <img src={LOGO_URL} alt="Level One" />
                    </div></div>
                  </div>
                  <h2 className="cal-modal-title">Revenue Assessment Scheduled.</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    We&apos;ll analyze your current operations and map the deployment pathway to increased revenue, reduced costs, and scalable growth.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
