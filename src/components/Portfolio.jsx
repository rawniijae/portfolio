import React from 'react';

export default function Portfolio() {
  return (
    <section className="py-section-gap bg-background" id="works">
      <div className="max-w-container-max mx-auto px-margin-edge text-center mb-stack-lg">
        <h2 className="font-headline-md text-headline-md mb-4">Selected works</h2>
        <div className="w-12 h-px bg-primary mx-auto mb-stack-md"></div>
        <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">
          A collection of my recent projects, featuring live demos and open-source code.
        </p>
      </div>
      <div className="max-w-container-max mx-auto px-margin-edge grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Project 1 */}
        <div className="flex flex-col group border border-outline-variant dark:border-outline bg-surface">
          <div className="relative overflow-hidden aspect-video">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="E-Commerce Mockup"
              src="/ecommerce.png"
            />
          </div>
          <div className="flex flex-col flex-grow p-8">
            <span className="font-label-caps text-label-caps mb-2 text-primary tracking-widest">FULLSTACK</span>
            <h4 className="font-headline-md text-headline-md mb-4">E-Commerce</h4>
            <div className="w-8 h-px bg-primary mb-6"></div>
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <a
                href="https://e-commerce-alpha-sage-28.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary px-6 py-3 font-label-caps text-label-caps text-primary hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap text-center"
              >
                LIVE LINK
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col group border border-outline-variant dark:border-outline bg-surface">
          <div className="relative overflow-hidden aspect-video">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Opium Fashion Website"
              src="/fashion.png"
            />
          </div>
          <div className="flex flex-col flex-grow p-8">
            <span className="font-label-caps text-label-caps mb-2 text-primary tracking-widest">WEB APP</span>
            <h4 className="font-headline-md text-headline-md mb-4">Opium Fashion</h4>
            <div className="w-8 h-px bg-primary mb-6"></div>
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <a
                href="https://drip-storage.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary px-6 py-3 font-label-caps text-label-caps text-primary hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap text-center"
              >
                LIVE LINK
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col group border border-outline-variant dark:border-outline bg-surface">
          <div className="relative overflow-hidden aspect-video">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Tasky Android App"
              src="/tasky.jpg"
            />
          </div>
          <div className="flex flex-col flex-grow p-8">
            <span className="font-label-caps text-label-caps mb-2 text-primary tracking-widest">ANDROID</span>
            <h4 className="font-headline-md text-headline-md mb-4">Tasky</h4>
            <div className="w-8 h-px bg-primary mb-6"></div>
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/rawniijae/Tasky"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary px-6 py-3 font-label-caps text-label-caps text-primary hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap text-center"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
