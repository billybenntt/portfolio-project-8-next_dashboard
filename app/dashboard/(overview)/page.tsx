import {CardWrapper} from '@/app/ui/dashboard/Cards';
import ChartRevenue from '@/app/ui/dashboard/ChartRevenue';
import LatestInvoices from '@/app/ui/dashboard/LatestInvoices';
import {fetchCardData} from '@/utils/data.fetch';
import {Suspense} from "react";
import {LatestInvoicesSkeleton, RevenueChartSkeleton, CardsSkeleton} from "@/app/ui/skeleton/skeletons";


// DASHBOARD MAIN PAGE

async function Page() {

    return (
        <section>
            <h1 className="mb-4 text-xl md:text-2xl">Home Page</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton/>}>
                    {/*GROUP*/}
                    <CardWrapper/>
                </Suspense>

            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">

                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <ChartRevenue/>
                </Suspense>


                <Suspense fallback={<LatestInvoicesSkeleton/>}>
                    <LatestInvoices/>
                </Suspense>


            </div>
        </section>
    );
}

export default Page;
