import Section from './section';
import { ResumeWorkExperience } from './_components';
import { EXTRAS } from '@/lib/extras';

export function Extras() {
  return (
    <Section id='extras' title='EXTRAS.'>
      <div className='flex w-full flex-col gap-4'>
        <span className='italic'>🔭 stuff i've done outside of work</span>
        <div className='grid w-full grid-cols-1 gap-4'>
          {EXTRAS.map((extra) => (
            <ResumeWorkExperience key={extra.company} experience={extra} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Extras;
