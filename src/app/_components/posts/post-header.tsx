import Avatar from '@/components/avatar';
import DateFormatter from '@/components/date-formatter';
import type { Author } from '@/interfaces/author';

import CoverImage from './cover-image';
import { PostTitle } from './post-title';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  readingTime: number;
};

export function PostHeader({ title, coverImage, date, author, readingTime }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='hidden md:mb-12 md:block'>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className='mb-8 sm:mx-0 md:mb-16'>
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className='mx-auto max-w-2xl'>
        <div className='mb-6 block md:hidden'>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className='mb-6 block text-lg'>
          <DateFormatter dateString={date} />
          <span className='ml-4'>|</span>
          <span className='ml-4'>{readingTime.toFixed(0)} min read</span>
        </div>
      </div>
    </>
  );
}
