import NextLink from 'next/link';

import Avatar from '@/components/avatar';
import DateFormatter from '@/components/date-formatter';
import type { Author } from '@/interfaces/author';

import CoverImage from './cover-image';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({ title, coverImage, date, excerpt, author, slug }: Props) {
  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className='mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8'>
        <div>
          <h3 className='mb-4 text-4xl leading-tight lg:text-5xl'>
            <NextLink href={`/posts/${slug}`} className='hover:underline'>
              {title}
            </NextLink>
          </h3>
          <div className='mb-4 text-lg md:mb-0'>
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
