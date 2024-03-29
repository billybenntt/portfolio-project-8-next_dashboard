import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/NavLinks';
import {IconDashboard, IconLogOut} from '@/assets/icons';

function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-black p-4 md:h-40"
                href="/"
            >
                <div className="flex w-32 flex-row items-center space-x-2 text-xl text-white md:w-40 md:flex-col md:items-start md:space-x-0">
                    <IconDashboard/>
                    <p>NextDash</p>
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks/>
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <Link href="/">
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-500 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
                        <IconLogOut/>
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default SideNav
