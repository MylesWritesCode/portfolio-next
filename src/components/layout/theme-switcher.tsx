'use client';

import cn from 'classnames';
import { useCallback } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  return (
    <div className={cn('dropdown dropdown-end', className)}>
      <button tabIndex={0} type='button' className='btn'>
        THEME
      </button>
      <ul className='dropdown-content menu z-[1] m-0 w-52 rounded-box bg-base-300 px-0 py-2 shadow'>
        <ThemeListItem name='dark' />
        <ThemeListItem name='dracula' />
        <ThemeListItem name='night' />
        <ThemeListItem name='light' />
        <ThemeListItem name='nord' />
      </ul>
    </div>
  );
};

export default ThemeSwitcher;

interface ThemeListItemProps {
  name: string;
}

const ThemeListItem = ({ name }: ThemeListItemProps) => {
  const handleClick = useCallback(() => {
    document.documentElement.setAttribute('data-theme', name);
  }, []);

  return (
    <li>
      <button type='button' className='flex w-52 justify-between gap-2 px-4 capitalize' onClick={handleClick}>
        <div data-theme={name} className=''>
          <div className='flex gap-1 border bg-base-100 p-2'>
            <div className='flex aspect-square w-5 items-center justify-center bg-primary'>
              <span className='font-bold text-primary-content'>A</span>
            </div>
            <div className='flex aspect-square w-5 items-center justify-center bg-secondary'>
              <span className='font-bold text-secondary-content'>A</span>
            </div>
            <div className='flex aspect-square w-5 items-center justify-center bg-accent'>
              <span className='font-bold text-accent-content'>A</span>
            </div>
            <div className='flex aspect-square w-5 items-center justify-center bg-neutral'>
              <span className='font-bold text-neutral-content'>A</span>
            </div>
          </div>
        </div>
        <span>{name}</span>
      </button>
    </li>
  );
};
