import React from "react";
import {inter} from "@/app/ui/fonts";
import '@/app/ui/global.css'
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Project 8: Next Dashboard',
    description: 'A CRUD app build with NextJS',
}


type RootNode = {
    children: React.ReactNode;
}

export default function RootLayout({children}: RootNode) {



    return (
        <html lang="en">
        <body className={`${inter.className} antialiasing`}>{children}</body>
        </html>
    );
}
