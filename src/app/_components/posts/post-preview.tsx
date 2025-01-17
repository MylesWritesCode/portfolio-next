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

export function PostPreview({ title, coverImage, date, excerpt, author, slug }: Props) {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className='mb-3 text-3xl leading-snug'>
        <NextLink href={`/posts/${slug}`} className='hover:underline'>
          {title}
        </NextLink>
      </h3>
      <div className='mb-4 text-lg'>
        <DateFormatter dateString={date} />
      </div>
      <p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
