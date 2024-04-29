import Form from '@/app/ui/invoices/FormCreate';
import Breadcrumbs from '@/app/ui/invoices/BreadCrumbs';
import { fetchCustomers } from '@/utils/data.fetch';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />


      <Form customers={customers} />
    </main>
  );
}