import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Lock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../motion';

gsap.registerPlugin(ScrollTrigger);

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

emailjs.init(EMAILJS_PUBLIC_KEY);

const INPUT =
  'w-full bg-[#fcfaf7] border border-[#e8e2d7] rounded-md text-sm px-4 py-3 focus:border-[#d99b4b] focus:ring-1 focus:ring-[#d99b4b] outline-none text-[#141311] placeholder:text-neutral-400 font-sans transition';

const LABEL =
  'block font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-500 mb-2';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [showSuccess, setShowSuccess] = useState(false);

  const formRef = useRef(null);
  const successRef = useRef(null);

  // Field groups cascade in as the form scrolls into view. Self-contained
  // (own ref + context) since this component is mounted inside Contact.jsx's
  // own animated tree — scoping to formRef keeps the two systems independent.
  useLayoutEffect(() => {
    let context;

    context = gsap.context(() => {
      const groups = gsap.utils.toArray(".form-field-group");

      if (prefersReducedMotion) {
        gsap.set(groups, { autoAlpha: 1, clearProps: "transform" });
        return;
      }

      gsap.fromTo(groups, { y: 16, autoAlpha: 0 }, {
        y: 0,
        autoAlpha: 1,
        duration: 0.45,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 82%", toggleActions: "play none none none" },
      });
    }, formRef);

    return () => context.revert();
  }, []);

  // Success banner pops in the moment it mounts.
  useEffect(() => {
    if (!showSuccess || !successRef.current) return;
    if (prefersReducedMotion) {
      gsap.set(successRef.current, { autoAlpha: 1, clearProps: "transform" });
      return;
    }
    gsap.fromTo(successRef.current, { scale: 0.95, y: -6, autoAlpha: 0 }, {
      scale: 1,
      y: 0,
      autoAlpha: 1,
      duration: 0.4,
      ease: "back.out(1.4)",
    });
  }, [showSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in Name, Email, and Message fields.');
      return;
    }
    setStatus('loading');

    const emailTemplateParams = {
      from_name: formData.name,
      from_email: formData.email,
      website: formData.website || 'Not provided',
      phone: formData.phone || 'Not provided',
      message: formData.message,
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailTemplateParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setShowSuccess(true);
        setFormData({ name: '', email: '', website: '', phone: '', message: '' });
        setStatus('idle');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Error sending email. Please try again.');
        setStatus('idle');
      });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} id="studio-intake-form" className="space-y-5">

      {/* Name + Email */}
      <div className="form-field-group grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={LABEL}>
            YOUR NAME <span className="text-[#d99b4b]">*</span>
          </label>
          <input
            type="text" name="name" value={formData.name}
            onChange={handleChange} placeholder="Marcus Vance" required
            className={INPUT}
          />
        </div>
        <div>
          <label className={LABEL}>
            EMAIL ADDRESS <span className="text-[#d99b4b]">*</span>
          </label>
          <input
            type="email" name="email" value={formData.email}
            onChange={handleChange} placeholder="marcus@vanceworks.com" required
            className={INPUT}
          />
        </div>
      </div>

      {/* Website + Phone */}
      <div className="form-field-group grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={LABEL}>WEBSITE OR COMPANY URL (OPTIONAL)</label>
          <input
            type="url" name="website" value={formData.website}
            onChange={handleChange} placeholder="https://vanceworks.com"
            className={INPUT}
          />
        </div>
        <div>
          <label className={LABEL}>PHONE OR WHATSAPP (OPTIONAL)</label>
          <input
            type="tel" name="phone" value={formData.phone}
            onChange={handleChange} placeholder="+1 (555) 019-2831"
            className={INPUT}
          />
        </div>
      </div>

      {/* Message */}
      <div className="form-field-group">
        <label className={LABEL}>
          TELL US ABOUT YOUR PROJECT <span className="text-[#d99b4b]">*</span>
        </label>
        <textarea
          name="message" value={formData.message}
          onChange={handleChange} required rows="4"
          placeholder="Tell us what you're looking to build, improve, or grow. Share your goals, requirements, or even just the idea you have in mind..."
          className="w-full resize-y rounded-md border border-[#e8e2d7] bg-[#fcfaf7] p-4 font-sans text-sm text-[#141311] outline-none transition placeholder:text-neutral-400 focus:border-[#d99b4b] focus:ring-1 focus:ring-[#d99b4b]"
        />
      </div>

      {/* Submit */}
      <div className="form-field-group pt-1">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex w-full items-center justify-center space-x-2 rounded-md bg-[#141311] px-6 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-900 disabled:bg-[#e8e2d7] disabled:text-neutral-500"
        >
          <span>{status === 'loading' ? 'Sending...' : 'Submit Project Brief'}</span>
          {status === 'loading' ? (
            <span className="animate-spin"><Send size={15} /></span>
          ) : (
            <span>→</span>
          )}
        </button>
      </div>

      {/* Success banner */}
      {showSuccess && (
        <div ref={successRef} className="flex items-start space-x-3 rounded-lg border border-amber-300/80 bg-amber-50/70 p-4 text-xs text-amber-900">
          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
          <div>
            <strong className="font-semibold text-amber-900">Message Sent!</strong>{' '}
            Your brief has been sent to our inbox. We'll get back to you within 24 hours.
          </div>
        </div>
      )}

      {/* Footer notice */}
      <div className="form-field-group flex flex-col items-center justify-between gap-2 border-t border-neutral-100 pt-4 text-[11px] text-neutral-400 sm:flex-row">
        <div className="flex items-center space-x-1.5">
          <Lock className="h-3.5 w-3.5 text-neutral-400" />
          <span>Protected by mutual confidentiality. Strict zero-spam policy.</span>
        </div>
        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#c58838]">
          DIRECT FOUNDER DISPATCH
        </span>
      </div>

    </form>
  );
}