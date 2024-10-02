import NextLink from 'next/link';

import { ThemeSwitcher } from '@/components/layout';

const Header = () => {
  return (
    <div className='flex flex-col px-4 sticky top-0 left-0 right-0 border-base-content bg-base-100 border-b justify-center w-full items-center'>
      <div className='flex w-full max-w-7xl flex-col items-center justify-between px-12 py-2 md:flex-row'>
        <h2 className='flex items-center font-bold text-2xl tracking-tight md:text-4xl md:tracking-tighter'>
          <NextLink href='/' className='hover:underline'>
            myles BERUEDA
          </NextLink>
        </h2>
        <div className='flex items-center gap-4'>
          <HeaderLink href='/#about-me'>about me</HeaderLink>
          <HeaderLink href='/#resume'>resume</HeaderLink>
          <HeaderLink href='/#projects'>projects</HeaderLink>
          <HeaderLink href='/posts'>blog</HeaderLink>
          <HeaderLink href='/#links'>links</HeaderLink>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
}

const HeaderLink = ({ href, children }: HeaderLinkProps) => {
  return (
    <NextLink className='hover:text-primary' href={href}>
      {children}
    </NextLink>
  );
};
