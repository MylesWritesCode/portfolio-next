import Container from '@/components/container';
import cn from 'classnames';

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  if (preview) {
    return (
      <div
        className={cn('border-b dark:bg-slate-800', {
          'border-neutral-800 bg-neutral-800 text-white': preview,
          'border-neutral-200 bg-neutral-50': !preview,
        })}>
        <Container>
          <div className='py-2 text-center text-sm'>
            This page is a preview.{' '}
            <a href='/api/exit-preview' className='underline hover:text-teal-300 duration-200 transition-colors'>
              Click here
            </a>
          </div>
        </Container>
      </div>
    );
  }

  return null;
};

export default Alert;
