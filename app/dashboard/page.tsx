import {Card} from '@/app/ui/dashboard/Card';
import ChartRevenue from '@/app/ui/dashboard/ChartRevenue';
import LatestInvoices from '@/app/ui/dashboard/LatestInvoices';
import {fetchCardData, fetchLatestInvoices, fetchRevenue} from '@/utils/dataFetch';

// DASHBOARD MAIN PAGE

async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const {totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers,} = await fetchCardData();

    return (
        <section>
            <h1 className="mb-4 text-xl md:text-2xl">Home Page</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="Collected" value={totalPaidInvoices} type="collected"/>
                <Card title="Pending" value={totalPendingInvoices} type="pending"/>
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices"/>
                <Card title="Total Customers" value={numberOfCustomers} type="customers"/>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <ChartRevenue revenue={revenue}/>
                <LatestInvoices latestInvoices={latestInvoices}/>
            </div>
        </section>
    );
}

export default Page;
