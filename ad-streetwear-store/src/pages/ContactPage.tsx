import React, { useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';

export const ContactPage: React.FC = () => {
  const [sent, setSent] = useState(false);
  usePageMeta({ title: 'Contact Concierge', urlPath: '/contact' });

  return (
    <div className="pt-28 pb-24 max-w-3xl mx-auto px-4 sm:px-8 page-enter">
      <h1 className="font-display font-bold text-5xl uppercase text-white mb-8">CONTACT A&amp;D</h1>
      {sent ? (
        <div className="border border-[#9E0B16] p-8 font-mono-tech text-sm text-white">
          MESSAGE RECEIVED. CONCIERGE@AD-IDENTITY.COM WILL RESPOND SHORTLY.
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4 border border-white/15 bg-[#0A0A0A] p-8"
        >
          <input required placeholder="YOUR NAME" className="w-full bg-[#050505] border border-white/15 p-3.5 text-sm text-white" />
          <input required type="email" placeholder="YOUR EMAIL" className="w-full bg-[#050505] border border-white/15 p-3.5 text-sm text-white" />
          <textarea required rows={4} placeholder="YOUR MESSAGE" className="w-full bg-[#050505] border border-white/15 p-3.5 text-sm text-white" />
          <button type="submit" className="bg-[#9E0B16] text-white font-mono-tech text-xs uppercase px-8 min-h-[48px]">
            SEND MESSAGE
          </button>
        </form>
      )}
    </div>
  );
};
