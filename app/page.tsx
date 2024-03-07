import style from '@/styles/home.module.css';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { jetBrainsMono } from '@/styles/fonts';
import Image from 'next/image';
import { heroDesktop, heroMobile } from '@/assets/images';

function Page() {
  //  MAIN PAGE
  return (
    <main className="flex min-h-screen flex-col p-2">
      {/*LOGO */}
      <header className="flex h-20 shrink-0 items-end rounded-lg bg-black p-4 md:h-52">
        <AcmeLogo />
      </header>

      <section className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={style.shape} />
          <p
            className={`${jetBrainsMono.className} tex-xl text-gray-800 md:text-xl md:leading-normal`}
          >
            <strong>Welcome to NextJS Dashboard.</strong> This is the customized
            example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-zinc-500">
              Next.js Learn Course
            </a>
          </p>
          <Link
            href={`/dashboard`}
            className="flex items-center gap-5 self-start rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-600 md:text-base"
          >
            <span>Log in</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src={heroDesktop}
            width={1000}
            height={500}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />

          <Image
            src={heroMobile}
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop mobile"
          />
        </div>
      </section>
    </main>
  );
}

export default Page;
