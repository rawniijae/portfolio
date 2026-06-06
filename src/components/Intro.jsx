import React from 'react';

export default function Intro() {
  return (
    <section className="py-section-gap max-w-container-max mx-auto px-margin-edge text-center">
      <h2 className="font-headline-lg text-headline-lg mb-stack-md">Professional Summary</h2>
      <div className="w-12 h-px bg-primary mx-auto mb-stack-md"></div>
      <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-section-gap">
        A dedicated and enthusiastic Computer Science Engineering student with a strong foundation in programming and problem-solving, actively seeking opportunities to apply theoretical knowledge to real-world projects. Eager to gain hands-on experience and grow within the tech community.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mt-stack-lg items-start">
        {/* Pillar 1 */}
        <div className="flex flex-col items-center group">
          <div className="mb-stack-md transition-all-long group-hover:-translate-y-2">
            <span className="material-symbols-outlined text-[48px] font-thin">code</span>
          </div>
          <div className="w-8 h-px bg-outline-variant mb-4"></div>
          <span className="font-label-caps text-label-caps mb-4">TECHNICAL SKILLS</span>
          <p className="font-body-md text-secondary text-sm">
            C++, Java, Python, JavaScript, React, Full Stack, DSA
          </p>
        </div>
        
        {/* Pillar 2 */}
        <div className="flex flex-col items-center group">
          <div className="mb-stack-md transition-all-long group-hover:-translate-y-2">
            <span className="material-symbols-outlined text-[48px] font-thin">forum</span>
          </div>
          <div className="w-8 h-px bg-outline-variant mb-4"></div>
          <span className="font-label-caps text-label-caps mb-4">LANGUAGES</span>
          <p className="font-body-md text-secondary text-sm">
            English, Hindi, Manipuri
          </p>
        </div>
        
        {/* Pillar 3 */}
        <div className="flex flex-col items-center group">
          <div className="mb-stack-md transition-all-long group-hover:-translate-y-2">
            <span className="material-symbols-outlined text-[48px] font-thin">location_on</span>
          </div>
          <div className="w-8 h-px bg-outline-variant mb-4"></div>
          <span className="font-label-caps text-label-caps mb-4">WHEREABOUTS</span>
          <p className="font-body-md text-secondary text-sm">
            Imphal, Manipur<br/>India - 759001
          </p>
        </div>
        
        {/* Pillar 4 */}
        <div className="flex flex-col items-center group">
          <div className="mb-stack-md transition-all-long group-hover:-translate-y-2">
            <span className="material-symbols-outlined text-[48px] font-thin">school</span>
          </div>
          <div className="w-8 h-px bg-outline-variant mb-4"></div>
          <span className="font-label-caps text-label-caps mb-4">EDUCATION</span>
          <p className="font-body-md text-secondary text-sm">
            Computer Science Engineering Student
          </p>
        </div>
      </div>
    </section>
  );
}
