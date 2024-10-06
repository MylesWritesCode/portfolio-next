interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className='flex w-full flex-col items-center px-12 pt-32 md:justify-between md:pt-24'>
      <h1 className='w-full text-left font-bold text-5xl uppercase leading-none tracking-tighter md:text-8xl'>
        {title}
      </h1>
      {children}
    </section>
  );
}
