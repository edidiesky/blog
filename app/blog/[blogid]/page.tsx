"use client"
import type { Metadata } from 'next'

import { Header } from '@/app/_common/Header';
import Sidebar from '@/app/_common/Sidebar';
import { useState } from 'react';
import Head from 'next/head';
import { Details } from './_components/Blogs';

// export const metadata: Metadata = {
//   title: 'Edidiong Blog',
//   description: 'Series of thought I share on web development',
// }
export default function Home() {
  const [sidebar, setSidebar] = useState(false)

  return (
    <div className="w-full min-h-full">
      <Header setSidebar={setSidebar} sidebar={sidebar} />
      <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
      <div className="flex flex-col gap-y-8 ">
        
        {/* <Blogs /> */}
        <Details/>
      </div>
    </div>
  );
}
