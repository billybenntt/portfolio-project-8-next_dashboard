import { InvoicesTableSkeleton } from '@/app/ui/skeleton/skeletons';
import { Suspense } from 'react';
import Search from '@/app/ui/components/search';
import Table from '@/app/ui/invoices/TableInvoices';
import { CreateInvoice } from '@/app/ui/invoices/buttons';


export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Invoices</h1>
      </div>
      <div className="mt-4 max-w-2xl flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
      </Suspense> */}
        <Table query={"query"} currentPage={1} />
      <div className="mt-5 flex w-full justify-center">
         {/*<Pagination totalPages={totalPages} />*/}
      </div>
    </div>
  );
}