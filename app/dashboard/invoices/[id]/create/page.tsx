import Form from '@/app/ui/invoices/FormEdit';
import Breadcrumbs from '@/app/ui/invoices/BreadCrumbs';
import { fetchCustomers } from '@/utils/data.fetch';

export default async function Page() {



  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      {/*<Form invoice={invoice} customers={customers} />*/}
    </main>
  );
}