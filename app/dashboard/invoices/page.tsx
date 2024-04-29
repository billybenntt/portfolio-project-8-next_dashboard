import {InvoicesTableSkeleton} from '@/app/ui/skeleton/skeletons';
import {Suspense} from 'react';
import {fetchInvoicesPages} from '@/utils/data.fetch'
import Search from '@/app/ui/components/Search';
import Table from '@/app/ui/invoices/TableInvoices';
import {CreateInvoice} from '@/app/ui/invoices/buttons';
import Pagination from '@/app/ui/invoices/Pagination';

interface IProps {
    searchParams?: {
        query?: string;
        page?: string;
    }
}

async function Page(props: IProps) {

    const {searchParams} = props
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchInvoicesPages(query)
    console.log(totalPages)

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-2xl">Invoices</h1>
            </div>
            <div className="mt-4 max-w-2xl flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..."/>
                <CreateInvoice/>
            </div>
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton/>}>
                <Table query={query} currentPage={currentPage}/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}

export default Page