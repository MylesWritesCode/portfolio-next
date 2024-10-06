import cn from 'classnames';

import Section from './section';

const s = `

`;

export function AboutMe() {
  return (
    <Section id='about-me' title='ABOUT ME.'>
      <div className='flex w-full flex-col gap-4'>
        <span className='italic'>🏄 a little bit about who i am</span>
        <div className='grid grid-cols-6 items-start justify-start gap-8'>
          <p className={cn('leading-relaxed tracking-wide', 'order-1', 'col-span-6 lg:col-span-5')}>
            I'm a passionate Software Engineer with a diverse range of experiences spanning frontend and full-stack
            development. Currently, at Intellibridge, I drive innovation on the R&D team, leading the frontend
            development of Aolytix, an infrastructure visualization tool. My expertise includes building scalable React
            applications, optimizing performance, and mentoring fellow engineers. Previously, I've worked at startups
            like Govalo, contributing to Shopify plugins, and built internal tools at Residential Choices that
            streamlined operations. I'm always excited to take on new challenges, explore cutting-edge technologies, and
            continue growing as a developer.
          </p>
          <div className={cn('order-4 col-span-2 aspect-square', 'lg:order-1 lg:col-span-1')}>
            <div
              className={cn('h-full w-full', 'bg-center bg-cover bg-no-repeat', 'rounded-full ring ring-primary')}
              style={{ backgroundImage: 'url("/assets/main/momo-duck.jpg")' }}
            />
          </div>

          <div className={cn('order-4 col-span-2 aspect-square', 'lg:order-1 lg:col-span-1')}>
            <div
              className={cn('h-full w-full', 'bg-center bg-cover bg-no-repeat', 'rounded-full ring ring-primary')}
              style={{ backgroundImage: 'url("/assets/main/momo-bed.jpeg")' }}
            />
          </div>
          <p className={cn('leading-relaxed tracking-wide', 'order-1', 'col-span-6 lg:col-span-5')}>
            Aside from work, I consider myself a fairly private person.
          </p>
          <p className={cn('leading-relaxed tracking-wide', 'order-1', 'col-span-6 lg:col-span-5')}>
            I'm a passionate Software Engineer with a diverse range of experiences spanning frontend and full-stack
            development. Currently, at Intellibridge, I drive innovation on the R&D team, leading the frontend
            development of Aolytix, an infrastructure visualization tool. My expertise includes building scalable React
            applications, optimizing performance, and mentoring fellow engineers. Previously, I've worked at startups
            like Govalo, contributing to Shopify plugins, and built internal tools at Residential Choices that
            streamlined operations. I'm always excited to take on new challenges, explore cutting-edge technologies, and
            continue growing as a developer.
          </p>

          <div className={cn('order-4 col-span-2 aspect-square', 'lg:order-1 lg:col-span-1')}>
            <div
              className={cn('h-full w-full', 'bg-center bg-cover bg-no-repeat', 'rounded-full ring ring-primary')}
              style={{ backgroundImage: 'url("/assets/main/momo-water.jpg")' }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
