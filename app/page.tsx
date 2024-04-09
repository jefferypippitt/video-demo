'use client'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const words =`Vercel empowers developers with lightning-fast deployment and seamless scalability. With its intuitive platform, building and deploying modern web applications has never been easier. `

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <TextGenerateEffect words={words} />
      </div>
    </section>
  )
}
