import { useMemo } from 'react';
import cn from 'classnames';

import type { WorkExperience } from '@/interfaces/work-experience';

import { toMonthYear } from '../_utils';

export interface ResumeWorkExperienceProps {
  experience: WorkExperience;
}

export const ResumeWorkExperience = ({ experience }: ResumeWorkExperienceProps) => {
  const dates = useMemo(() => {
    const from = toMonthYear(experience.dates.start);
    const to = toMonthYear(experience.dates.end);

    if (from === to) return from;
    return `${from} - ${to}`;
  }, [experience.dates]);

  return (
    <div className='group flex select-none flex-col gap-2 border border-base-300 bg-base-200 p-4 hover:border-primary'>
      <div id='resume__work-experience_header' className='flex w-full items-center gap-2'>
        <div
          className={cn(
            'flex w-full flex-col items-start justify-between gap-2 font-bold tracking-widest',
            'group-hover:text-primary',
            'md:flex-row',
          )}>
          <div className='flex flex-col gap-2 sm:flex-row'>
            <span>{experience.company}</span>
            {experience.location && (
              <>
                <span className='hidden font-bold sm:block'> | </span>
                <span>{experience.location}</span>
              </>
            )}
          </div>
          <span className='font-mono'>{dates}</span>
        </div>
      </div>
      <span className='font-medium italic'>{experience.position}</span>
      {experience.description && <span>{experience.description}</span>}
      {experience.entries && (
        <ul className='mx-8 list-inside list-disc'>
          {experience.entries.map((entry, i) => (
            <li key={`${i + 1}`}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
