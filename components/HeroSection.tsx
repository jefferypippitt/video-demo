import React from 'react';
import NextVideo from 'next-video';
import sample from '@/videos/sample.mp4';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const words = `Vercel empowers developers with lightning-fast deployment and seamless scalability. With its intuitive platform, building and deploying modern web applications has never been easier. `;

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center">
      <div className='relative flex h-screen flex-col justify-center'>
        <div className='absolute inset-0 -z-10'>
          <NextVideo
            src={sample}
            className='object-cover w-full h-full'
            autoPlay
            loop
          ></NextVideo>
        </div>
        <div className='justify-top absolute inset-0 mt-24 flex flex-col items-center text-center'>
          <div className='flex flex-col items-center gap-8'>
            <TextGenerateEffect
              className='max-w-[20ch] text-center text-6xl md:text-4xl lg:text-6xl font-semibold tracking-tight first:mt-0'
              words={words}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
