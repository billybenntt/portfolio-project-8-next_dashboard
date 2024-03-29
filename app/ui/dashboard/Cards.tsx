import {IconCollected, IconPending, IconTotal, IconCustomers} from '@/assets/icons';
import {fetchCardData} from "@/utils/data.fetch";

export interface CardProps {
    title: string;
    value: number | string;
    type: 'invoices' | 'customers' | 'pending' | 'collected'
}


const iconMap = {
    collected: IconCollected,
    customers: IconCustomers,
    pending: IconPending,
    invoices: IconTotal,
};


export function Cards(props: CardProps) {


    const {type, title, value} = props
    const Icon = iconMap[type];

    return (
        <article className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                {Icon ? <Icon className="h-5 w-5"/> : null}
                <h3 className="ml-2 text-sm font-medium">
                    {title}
                </h3>
            </div>
            <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
                {value}
            </p>
        </article>
    );
}


export async function CardWrapper() {

    const {
        numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices,
    } = await fetchCardData();

    return (
        <>

            <Cards title="Collected" value={totalPaidInvoices} type="collected"/>
            <Cards title="Pending" value={totalPendingInvoices} type="pending"/>
            <Cards title="Total Invoices" value={numberOfInvoices} type="invoices"/>
            <Cards
                title="Total Customers"
                value={numberOfCustomers}
                type="customers"
            />
        </>
    );
}

