import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault(); // Prevent mailto redirect if they just want to copy
    navigator.clipboard.writeText('subhasrngthem@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="bg-primary dark:bg-surface-container-lowest flex flex-col items-center justify-center w-full py-section-gap px-margin-edge border-t border-outline-variant dark:border-outline text-on-primary dark:text-on-surface"
    >
      <div className="w-16 h-16 border-2 border-on-primary flex items-center justify-center mb-8">
        <span className="font-headline-lg text-headline-lg font-bold">M</span>
      </div>
      <h2 className="font-headline-lg text-headline-lg mb-4 text-center">Let's build something together.</h2>
      <div className="w-12 h-px bg-on-primary opacity-40 mx-auto mb-stack-lg"></div>

      <div className="flex flex-wrap justify-center gap-12 mb-section-gap">
        <a 
          className="flex flex-col items-center group cursor-pointer" 
          onClick={handleCopyEmail}
          href="mailto:subhasrngthem@gmail.com"
          title="Click to copy email address"
        >
          <span className="material-symbols-outlined text-[32px] mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
            {copied ? 'check_circle' : 'mail'}
          </span>
          <span className="font-label-caps text-label-caps opacity-80 group-hover:hidden">
            EMAIL ME
          </span>
          <span className="font-label-caps text-label-caps opacity-100 hidden group-hover:block lowercase tracking-widest text-on-primary">
            {copied ? 'COPIED!' : 'subhasrngthem@gmail.com'}
          </span>
        </a>
        
        <a
          className="flex flex-col items-center group"
          href="https://www.linkedin.com/in/moirangthem-subhashchandra-singh-580814288"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[32px] mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
            work
          </span>
          <span className="font-label-caps text-label-caps group-hover:opacity-100 transition-opacity opacity-80">
            LINKEDIN
          </span>
        </a>
        
        <a
          className="flex flex-col items-center group"
          href="https://github.com/rawniijae"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[32px] mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
            code
          </span>
          <span className="font-label-caps text-label-caps group-hover:opacity-100 transition-opacity opacity-80">
            GITHUB
          </span>
        </a>
      </div>

      <p className="font-label-caps text-label-caps opacity-40 text-center mt-12">
        © 2026 MOIRANGTHEM SUBHASHCHANDRA SINGH. HANDCRAFTED WITH INTENTION.
      </p>
    </footer>
  );
}
