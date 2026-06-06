import React from 'react';

export default function Navigation() {
  return (
    <nav className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline flex flex-col items-center justify-center w-full py-6 space-y-4 sticky top-0 z-50">
      <div className="flex items-center justify-center space-x-8 md:space-x-12">
        <a
          className="font-label-caps text-label-caps text-primary dark:text-inverse-primary border-b-2 border-primary dark:border-inverse-primary pb-1 transition-colors duration-200"
          href="#works"
        >
          WORKS
        </a>
        <a
          className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
          href="#about"
        >
          ABOUT
        </a>
        <div className="hidden md:block px-4">
          <div className="w-10 h-10 border-2 border-primary flex items-center justify-center">
            <span className="font-headline-md text-headline-md font-bold text-primary">M</span>
          </div>
        </div>
        <a
          className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
          href="https://github.com/rawniijae"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
          href="#contact"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
}
