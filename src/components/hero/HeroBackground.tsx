import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 to-primary-800/90" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="https://player.vimeo.com/external/480737580.hd.mp4?s=f5a5a4d0bc0fb8c5a7c7f0dc36cd7c7f8fccb631&profile_id=175" type="video/mp4" />
      </video>
    </div>
  );
}