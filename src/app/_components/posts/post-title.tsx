import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className='mb-12 text-center font-bold text-5xl leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl'>
      {children}
    </h1>
  );
}
