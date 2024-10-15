import { AboutMe, Extras, Links, Projects, Resume } from './_components/home';

export default function Index() {
  return (
    <main>
      <div className='flex w-full flex-col items-center justify-center border-base-content bg-base-100 px-4'>
        <div className='flex w-full max-w-7xl flex-col items-center justify-between py-2'>
          <Links />
          <AboutMe />
          <Resume />
          <Extras />
          <Projects />
        </div>
      </div>
    </main>
  );
}
