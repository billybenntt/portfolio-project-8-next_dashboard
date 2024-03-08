import {IconHome, IconInvoices, IconCustomers} from '@/assets/icons'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

const links = [
    {
        name: 'Home',
        href: '/dashboard',
        icon: IconHome
    },
    {
        name: 'Invoices',
        href: '/dashboard/invoices',
        icon: IconInvoices,
    },
    {
        name: 'Customers',
        href: '/dashboard/customers',
        icon: IconCustomers
    },
];

export default links