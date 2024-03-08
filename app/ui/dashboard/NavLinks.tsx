'use client';
import clsx from 'clsx';
import Link from 'next/link';
import links from '@/utils/links';
import {usePathname} from 'next/navigation';


function NavLinks() {
    const pathName = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                const classIsActive = clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium' +
                    ' hover:bg-zinc-700  hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                        'bg-zinc-900 text-white': pathName === link.href,
                    },
                )

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={classIsActive}>
                        <LinkIcon className="w-6 "/>
                        <p className="hidden md:block">
                            {link.name}
                        </p>
                    </Link>
                );
            })}
        </>
    );
}

export default NavLinks