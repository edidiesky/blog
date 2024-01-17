"use client"
import { useState } from 'react';
import { Blogs } from './_components/Blogs';
import { Header } from '../_common/Header';
import Sidebar from '../_common/Sidebar';

export default function Home() {
  const [sidebar, setSidebar] = useState(false)

  return (
    <div className="w-full min-h-full">
      <Header setSidebar={setSidebar} sidebar={sidebar} />
      <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
      <div className="flex flex-col gap-y-8 ">
        
        <Blogs />
      </div>
    </div>
  );
}
