'use server'

import {z} from 'zod'
import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";


// ZOD VALIDATION
const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
})

// ZOD INSTANCE
const CreateInvoice = FormSchema.omit({id: true, date: true});


export async function createInvoice(formData: FormData) {

    const rawFormData = {
        customerId: formData.get("customerId"),
        amount: formData.get("amount"),
        status: formData.get("status"),
    }


    // ZOD PARSE
    const {customerId, amount, status} = CreateInvoice.parse(rawFormData);

    const amountInCents = amount * 100
    const date = new Date().toISOString().split("T")[0]

    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;

    // REFRESH DATA FROM SERVER
    revalidatePath('/dashboard/invoices');
    // RETURN TO INVOICES
    redirect('/dashboard/invoices');

}
