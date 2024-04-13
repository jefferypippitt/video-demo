"use client";

import React, { useState } from 'react';
import NextVideo from 'next-video';
import sample from '@/videos/sample.mp4';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Button } from './ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const words = `Vercel empowers developers with lightning-fast deployment and seamless scalability. With its intuitive platform, building and deploying modern web applications has never been easier. `;

const HeroSection: React.FC = () => {
  const [muted, setMuted] = useState(true);

  const handleToggleMute = () => {
    setMuted(!muted);
  };

  return (
    <section className="relative h-screen flex flex-col justify-center">
      <div className='relative flex h-screen flex-col justify-center'>
        <div className='absolute inset-0 -z-10'>
          <NextVideo
            src={sample}
            className='object-cover w-full h-full'
            autoPlay
            loop
            muted={muted} // Use muted state variable to control muting
          />
        </div>
        {/* Mute/Unmute Button */}
        <div className='justify-top absolute inset-0 mt-24 flex flex-col items-center text-center'>
          <div className='flex items-center gap-4'>
            <Button variant={'secondary'} onClick={handleToggleMute} className={`relative inline-block rounded-full h-12 w-12 transition-all duration-300`}>
              {muted ? <Volume2 size={15} /> : <VolumeX size={15} />} {/* Conditionally render play or pause icon */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className={`w-2 h-2 rounded-full ${muted ? 'hidden' : ''}`}></div>
              </div>
            </Button>
            <TextGenerateEffect
              className='text-center text-6xl max-w-[20ch] md:text-4xl lg:text-6xl tracking-tight first:mt-0 font-thin'
              words={words}
             
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
