import cn from 'classnames';

import Section from './section';

export function AboutMe() {
  return (
    <Section id='about-me' title='ABOUT ME.'>
      <div className='flex w-full flex-col gap-4'>
        <span className='italic'>🏄 a little bit about who i am</span>
        <div className='grid grid-cols-6 items-start justify-start gap-8 transition-all'>
          <p className={cn('leading-relaxed tracking-wide', 'order-1', 'col-span-6 lg:col-span-5')}>
            I'm a passionate Software Engineer with a diverse range of experiences spanning frontend and full-stack
            development. Currently, at Intellibridge, I drive innovation on the R&amp;D team, leading the frontend
            development of Aolytix, an infrastructure visualization tool. My expertise includes building scalable React
            applications, optimizing performance, and mentoring fellow engineers. Previously, I've worked at startups
            like Govalo, contributing to Shopify plugins, and built internal tools at Residential Choices that
            streamlined operations. I'm always excited to take on new challenges, explore cutting-edge technologies, and
            continue growing as a developer.
          </p>
          <div
            className={cn(
              'order-4 col-span-4 col-start-2 aspect-square',
              'md:col-span-2 md:col-start-3',
              'lg:order-1 lg:col-span-1 lg:col-start-auto',
            )}>
            <div
              className={cn(
                'h-full w-full rounded-full',
                'bg-center bg-cover bg-no-repeat',
                'rounded-full ring ring-primary',
                'transition-all',
              )}
              style={{ backgroundImage: 'url("/assets/main/momo-duck.jpg")' }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
