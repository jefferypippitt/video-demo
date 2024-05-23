import sample from '@/videos/sample.mp4'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import NextVideo from 'next-video'

const words = `Vercel empowers developers with lightning-fast 🚀 deployment and seamless scalability. With its intuitive platform, building and deploying modern web applications has never been easier.`

export default function Page() {
  return (
    <div className='relative min-h-screen w-screen overflow-hidden'>
      <NextVideo
        src={sample}
        className='h-full w-full object-cover'
        autoPlay
        loop
        controls
        muted
      />
      <div className='absolute top-5 flex w-full justify-center p-4 md:top-10'>
        <div className='max-w-[85ch] text-center text-lg font-semibold tracking-tight md:text-xl lg:text-2xl'>
          <TextGenerateEffect words={words} />
        </div>
      </div>
    </div>
  )
}
