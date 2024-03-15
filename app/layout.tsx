import React from 'react';
import '@/styles/global.css';
import type {Metadata} from 'next';
import {jetBrainsMono} from '@/styles/fonts';
import {ReactProps} from '@/types/app.definitions';

export const metadata: Metadata = {
    title: 'Project 8: Next Invoice',
    description: 'A CRUD app build with NextJS',
};


function RootLayout({children}: ReactProps) {
    return (
        <html lang="en">
        <body className={`${jetBrainsMono.className} antialiasing`}>
            {children}
        </body>
        </html>
    );
}

export default RootLayout;
