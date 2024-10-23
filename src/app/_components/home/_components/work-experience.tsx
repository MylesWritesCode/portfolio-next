import cn from 'classnames';
import NextLink from 'next/link';
import { useMemo } from 'react';
import type React from 'react';
import { IoLink, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

import type { WorkExperience } from '@/interfaces/work-experience';

import { toMonthYear } from '../_utils';

type LinkType = Exclude<WorkExperience['links'], undefined>[number]['type'];
const LinkTypeIcon: Record<LinkType, React.ReactNode> = {
  website: <IoLink size={16} />,
  github: <IoLogoGithub size={16} />,
  linkedin: <IoLogoLinkedin size={16} />,
};

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
    <div className='group flex flex-col gap-2 border border-base-300 bg-base-200 p-4 hover:border-primary'>
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
      {experience.position && <span className='font-medium italic'>{experience.position}</span>}
      {experience.description && <span>{experience.description}</span>}
      {experience.entries && (
        <ul className='mx-8 list-inside list-disc'>
          {experience.entries.map((entry, i) => (
            <li key={`${i + 1}`}>{entry}</li>
          ))}
        </ul>
      )}
      <div id='work-experience__links' className='flex gap-2'>
        {experience.links && (
          <>
            <span className='font-medium'>links:</span>
            {experience.links?.map((link) => (
              <div key={link.title} className='flex [&:last-child>.comma]:hidden'>
                <NextLink
                  href={link.uri}
                  className='flex items-center justify-center hover:text-primary hover:underline'>
                  {LinkTypeIcon[link.type]}
                  <span className='ml-1'>{link.title}</span>
                </NextLink>
                <span className='comma'>,</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
