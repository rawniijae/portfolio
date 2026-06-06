import React from 'react';

export default function About() {
  return (
    <section className="bg-primary-container py-section-gap overflow-hidden" id="about">
      <div className="max-w-container-max mx-auto px-margin-edge grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-5 relative group">
          <div className="aspect-[3/4] overflow-hidden grayscale bg-surface-container">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Minimalist creative workspace"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXuCxwWHmjBQYsNi5M1O2TCX_6J-oTPd6ZdU06QU7vjpX4nvrTjtytMnpg3csciYxLt_Ll18rZq6qR0Iv27nFRDEstMuNJ2ZaX5j3aADhB-9Crud1_eyTw_AGAJeWhGg7qhoBjgjiLO7QHerQ5QC47-LvLXR0G7lrI5W1x5qfcBP72XXg1_XnAkXzb09didAjjCzRZPS2NMF6QTLJE6hE8UzXKL80fZxROrZem7lIxS_KVgCkKMDIh1yleNXH4Y3E5c1HTmOrz4Ag"
            />
          </div>
          <div className="absolute -right-8 bottom-12 hidden lg:block">
            <span className="vertical-text font-label-caps text-on-primary tracking-[0.8em] opacity-40 text-sm">DEVELOPER</span>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-stack-md text-on-primary">
          <span className="font-label-caps text-label-caps opacity-60">ABOUT ME</span>
          <h3 className="font-headline-lg text-headline-lg leading-tight">Engineering the Web</h3>
          <div className="w-12 h-px bg-on-primary opacity-40"></div>
          <p className="font-body-lg text-body-lg opacity-80 leading-relaxed">
            I am Moirangthem Subhashchandra Singh. I build performant web apps with modern technologies. I focus on creating scalable architectures with beautiful and intuitive user interfaces.
          </p>
          <p className="font-body-md text-body-md opacity-60 leading-relaxed">
            Always learning and pushing the boundaries of what is possible on the web. I enjoy solving complex problems and turning ideas into tangible digital products.
          </p>
          <div className="pt-8">
            <a
              className="inline-block border border-on-primary px-10 py-4 font-label-caps text-label-caps hover:bg-on-primary hover:text-primary transition-all duration-300"
              href="#contact"
            >
              LET'S CONNECT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
