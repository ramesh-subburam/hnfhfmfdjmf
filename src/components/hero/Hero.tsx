import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  );
}