import SideNav from '@/app/ui/dashboard/sidenav';
import {ReactProps} from '@/types/definitions';
import {jetBrainsMono} from '@/styles/fonts';

function Layout({children}: ReactProps) {

    return (
        <main className={`flex h-screen flex-col md:flex-row md:overflow-hidden ${jetBrainsMono.className}`}>
            {/*SHARED LAYOUT*/}
            <aside className="w-full flex-none md:w-64">
                <SideNav/>
            </aside>

            {/*  DYNAMIC SECTIONS */}
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </main>
    );
}

export default Layout;
