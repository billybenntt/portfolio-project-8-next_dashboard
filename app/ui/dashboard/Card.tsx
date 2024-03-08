import {CardProps} from "@/types/definitions";
import {IconCollected, IconPending, IconTotal, IconCustomers} from '@/assets/icons';

const iconMap = {
    collected: IconCollected,
    customers: IconCustomers,
    pending: IconPending,
    invoices: IconTotal,
};


export function Card(props: CardProps) {

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


export default async function CardWrapper() {
    return (
        <>
            {/* NOTE: comment in this code when you get to this point in the course */}

            {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
        </>
    );
}

