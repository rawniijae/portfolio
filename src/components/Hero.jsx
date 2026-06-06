import React from 'react';

export default function Hero() {
  return (
    <header className="relative min-h-screen w-full flex items-center justify-center bg-primary overflow-hidden pt-20 pb-20">
      <div className="max-w-container-max mx-auto px-margin-edge w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Text Content */}
        <div className="text-left flex flex-col justify-center">
          <div className="flex items-center mb-stack-sm space-x-4">
            <div className="w-8 h-px bg-on-primary opacity-40"></div>
            <span className="font-label-caps text-label-caps text-on-primary opacity-80 uppercase tracking-widest">
              Portfolio of
            </span>
          </div>
          
          <h1
            className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-on-primary mb-stack-md tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            MOIRANGTHEM<br />SUBHASHCHANDRA<br />SINGH
          </h1>
          
          <div className="font-label-caps text-label-caps text-on-primary tracking-[0.3em] md:tracking-[0.5em] opacity-60">
            SOFTWARE ENGINEER | WEB DEVELOPER
          </div>
        </div>

        {/* Right: Photo */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] aspect-[3/4] bg-surface-container overflow-hidden group border border-outline-variant/30">
            {/* The user can replace /profile.jpg with their actual photo */}
            <img
              src="/profile.jpg"
              alt="Your Profile"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback if image doesn't exist */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-variant text-surface-tint p-8 text-center" style={{ display: 'none' }}>
              <span className="material-symbols-outlined text-4xl mb-4">account_circle</span>
              <p className="font-body-md">Save your photo as <br/><strong className="text-primary">public/profile.jpg</strong><br/>to display it here.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-on-primary opacity-40">expand_more</span>
      </div>
    </header>
  );
}
