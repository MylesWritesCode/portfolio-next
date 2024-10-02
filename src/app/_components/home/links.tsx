import NextLink from 'next/link';

import { LINKS } from '@/lib/links';

import Section from './section';

export function Links() {
  return (
    <Section id='links' title='LINKS.'>
      <div className='flex w-full flex-col gap-4'>
        <span className='italic'>🌐 other places you can find me on the internet</span>
        <div className='flex flex-col gap-2 md:flex-row md:gap-4'>
          <Link href={LINKS.github} title='github' />
          <Link href={LINKS.mastodon} title='mastodon' />
          <Link href={LINKS.linkedin} title='linkedin' />
        </div>
      </div>
    </Section>
  );
}

export default Links;

interface LinkProps {
  href: string;
  title: string;
}

const Link = ({ href, title }: LinkProps) => {
  return (
    <NextLink href={href} className='hover:text-primary' target='_blank'>
      <h2 className='text-2xl'>{title}</h2>
    </NextLink>
  );
};
