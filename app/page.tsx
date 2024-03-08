import shape from '@/styles/home.module.css';
import LogoMain from '@/app/ui/LogoMain';
import Link from 'next/link';
import Image from 'next/image';
import {IconLogIn} from '@/assets/icons'
import {heroDesktop, heroMobile} from '@/assets/images';


//  LOGIN MAIN PAGE

function Page() {
    return (
        <main className="flex min-h-screen flex-col p-2">
            {/*LOGO */}
            <header className="flex h-20 shrink-0 items-end rounded-lg bg-black p-4 md:h-52">
                <LogoMain/>
            </header>


            <section className="mt-4 flex grow flex-col gap-4 md:flex-row">
                <article className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    <div className={shape.triangle}/>
                    <p className="tex-xl text-gray-800 md:text-xl md:leading-normal">
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
                        <IconLogIn/>
                    </Link>
                </article>

                <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                    <Image
                        src={heroDesktop}
                        width={960}
                        height={615}
                        priority
                        className="hidden md:block"
                        alt="Screenshots of the dashboard project showing desktop version"
                    />

                    <Image
                        src={heroMobile}
                        width={560}
                        height={620}
                        priority
                        className="block md:hidden"
                        alt="Screenshots of the dashboard project showing desktop mobile"
                    />
                </div>
            </section>
        </main>
    );
}

export default Page;
