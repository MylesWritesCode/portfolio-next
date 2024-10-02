import classNames from 'classnames';

import type { Skill } from '@/interfaces/skill';

interface ResumeSkillProps {
  skill: Skill;
}

export const ResumeSkill = ({ skill }: ResumeSkillProps) => {
  return (
    <div
      className={classNames(
        'flex select-none items-center justify-between gap-2',
        'border bg-base-200 p-4 hover:border-primary hover:text-primary',
        'dark:hover:border-accent dark:hover:text-accent',
      )}>
      <div className='flex items-center'>
        {skill.icon}
        <span className='ml-2'>{skill.name}</span>
      </div>
      <span className='uppercase'>{skill.experience}</span>
    </div>
  );
};
