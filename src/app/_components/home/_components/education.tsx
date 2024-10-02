import classNames from 'classnames';

import type { Education } from '@/interfaces/education';

import { toMonthYear } from '../_utils';

interface ResumeEducationProps {
  education: Education;
}

export const ResumeEducation = ({ education }: ResumeEducationProps) => {
  return (
    <div className='group flex flex-col gap-2 border border-base-300 bg-base-200 p-4 hover:border-secondary'>
      <div id='resume__work-experience_header' className='flex w-full items-center'>
        <div
          className={classNames(
            'flex w-full flex-col justify-between gap-2 font-bold tracking-widest',
            'group-hover:text-secondary',
            'md:flex-row md:items-center',
          )}>
          <span className=''>{education.school}</span>
          <span className='font-mono'>
            {toMonthYear(education.dates.start)} - {toMonthYear(education.dates.end)}
          </span>
        </div>
      </div>
      <div className='flex flex-col gap-2 sm:flex-row'>
        <span className='font-medium italic'>{education.degree}</span>
        {education.gpa && (
          <>
            <span className='hidden font-bold sm:block'> | </span>
            <span>GPA {education.gpa}</span>
          </>
        )}
      </div>
      {education.description && <span>{education.description}</span>}
      {education.entries && (
        <ul className='mx-8 list-inside list-disc'>
          {education.entries.map((entry, i) => (
            <li key={`${i + 1}`}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
