import Section from './section';

export function AboutMe() {
  return (
    <Section id='about-me' title='ABOUT ME.'>
      <div className='flex w-full flex-col gap-4'>
        <span className='italic'>🏄 a little bit about who i am</span>
        <div className='flex items-start justify-start gap-8'>
          <p className='leading-relaxed tracking-wide'>
            I'm a passionate Software Engineer with a diverse range of experiences spanning frontend and full-stack
            development. Currently, at Intellibridge, I drive innovation on the R&D team, leading the frontend
            development of Aolytix, an infrastructure visualization tool. My expertise includes building scalable React
            applications, optimizing performance, and mentoring fellow engineers. Previously, I've worked at startups
            like Govalo, contributing to Shopify plugins, and built internal tools at Residential Choices that
            streamlined operations. I'm always excited to take on new challenges, explore cutting-edge technologies, and
            continue growing as a developer.
          </p>
          <div
            className='mask mask-circle aspect-square w-full bg-center bg-no-repeat bg-cover'
            style={{ backgroundImage: 'url("/assets/main/momo-duck.jpg")' }}
          />
        </div>
      </div>
    </Section>
  );
}

// <img
//   className='mask mask-circle aspect-square w-1/5 object-cover'
//   alt='momo-duck'
//   src='/assets/main/momo-duck.jpg'
// />

export default AboutMe;
