import { useEffect, useState } from 'react';
import { enquiryTypes } from '../content/enquiry.js';
import { site, phoneHref } from '../siteConfig.js';

const empty = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  ceremonyType: '',
  date: '',
  location: '',
  message: '',
  heardFrom: '',
  website: '', // honeypot: real people never see or fill this
};

export default function EnquiryForm({ defaultType = '', gentle = false }) {
  const [values, setValues] = useState({ ...empty, ceremonyType: defaultType });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');
  // Earliest choosable date: today, worked out in the visitor's browser after load.
  const [today, setToday] = useState(undefined);
  useEffect(() => {
    const d = new Date();
    setToday(new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10));
  }, []);

  const set = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || 'Your enquiry didn’t send.');
      setStatus('sent');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-sent" role="status">
        <h3>Thanks, {values.firstName}. Your enquiry is on its way.</h3>
        <p>I’ll be in touch soon. If it’s urgent, call me on <a href={phoneHref}>{site.phone}</a>.</p>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={submit} noValidate={false}>
      <div className="field-row">
        <label>
          First name
          <input name="firstName" autoComplete="given-name" required value={values.firstName} onChange={set('firstName')} />
        </label>
        <label>
          Last name
          <input name="lastName" autoComplete="family-name" required value={values.lastName} onChange={set('lastName')} />
        </label>
      </div>
      <div className="field-row">
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required value={values.email} onChange={set('email')} />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" autoComplete="tel" required value={values.phone} onChange={set('phone')} />
        </label>
      </div>
      <label>
        What are you planning?
        <select name="ceremonyType" required value={values.ceremonyType} onChange={set('ceremonyType')}>
          <option value="" disabled>
            Choose a ceremony
          </option>
          {enquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </label>
      <div className="field-row">
        <label>
          <span>Date <span className="optional">(if you know it)</span></span>
          <input type="date" name="date" min={today} value={values.date} onChange={set('date')} />
        </label>
        <label>
          <span>Where <span className="optional">(suburb or venue)</span></span>
          <input name="location" value={values.location} onChange={set('location')} />
        </label>
      </div>
      <label>
        {gentle ? 'Tell me a little about your loved one and what you need' : 'Tell me about your plans'}
        <textarea name="message" rows="5" required value={values.message} onChange={set('message')} placeholder={
          gentle
            ? 'Their name, when and where you’d like the service, and anything else you’d like me to know'
            : 'Who, what, when, where, and anything else you’d like me to know'
        } />
      </label>
      <label>
        <span>How did you hear about me? <span className="optional">(optional)</span></span>
        <input name="heardFrom" value={values.heardFrom} onChange={set('heardFrom')} />
      </label>
      <label className="hp" aria-hidden="true">
        Leave this empty
        <input name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
      </label>
      {status === 'error' && (
        <p className="form-error" role="alert">
          {error} Please try again, or email <a href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
          <a href={phoneHref}>{site.phone}</a>.
        </p>
      )}
      <p className="form-status" role="status" aria-live="polite">
        {status === 'sending' ? 'Sending your enquiry…' : ''}
      </p>
      <button type="submit" className="button" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send enquiry'}
      </button>
    </form>
  );
}
