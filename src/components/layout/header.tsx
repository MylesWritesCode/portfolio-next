'use client';

import { useCallback } from 'react';
import NextLink from 'next/link';
import cn from 'classnames';

import { ThemeSwitcher } from '@/components/layout';

const Header = () => {
  return (
    <div
      className={cn(
        'sticky top-0 right-0 left-0 z-50',
        'border-base-content border-b',
        'flex w-full flex-col items-center justify-center bg-base-100 px-4',
      )}>
      <div
        className={cn(
          'flex w-full flex-col items-center justify-between',
          'max-w-7xl px-4 py-2',
          'md:flex-row md:px-12',
        )}>
        <div className='flex w-full justify-between md:w-auto'>
          <h2 className={cn('flex items-center font-bold text-2xl tracking-tight', 'md:text-4xl md:tracking-tighter')}>
            <NextLink href='/' className='hover:underline'>
              myles BERUEDA
            </NextLink>
          </h2>
          {/* Switcher for small screens */}
          <ThemeSwitcher className='block md:hidden' />
        </div>
        <div className='flex w-full justify-start gap-4 md:w-auto md:items-center'>
          <HeaderLink href='/#about-me'>
            about<span className='hidden md:inline-block'>&nbsp;me</span>
          </HeaderLink>
          <HeaderLink href='/#resume'>resume</HeaderLink>
          <HeaderLink href='/#projects'>projects</HeaderLink>
          <HeaderLink href='/posts'>blog</HeaderLink>
          <HeaderLink href='/#links'>links</HeaderLink>
          {/* Switcher for full-sized screens */}
          <ThemeSwitcher className='hidden md:block' />
        </div>
      </div>
    </div>
  );
};

export default Header;

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  hidden?: boolean;
}

const HeaderLink = ({ href, disabled, hidden, children }: HeaderLinkProps) => {
  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) e.preventDefault();
    },
    [disabled],
  );

  if (hidden) return null;

  return (
    <NextLink
      className={cn('text-base-content', disabled ? '!text-opacity-40 cursor-not-allowed' : 'hover:text-primary')}
      href={href}
      onClick={handleOnClick}>
      {children}
    </NextLink>
  );
};
