import React from 'react';
import Image from 'next/image';
import SidebarItem from '@/app/components/sidebar-item';
import Link from 'next/link';

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Link href="/" className="flex items-center py-8 mb-11 mx-auto gap-4">
          <Image width={32} height={32} src="/icons/logo.svg" alt="logo" />
          <p>VendorСonnect</p>
        </Link>
        <ul className="space-y-7">
          <SidebarItem
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="companies icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button className="flex items-center gap-2 p-6 mt-auto mx-auto">
          <Image
            width={18}
            height={18}
            src="/icons/arrow-left-on-rectangle.svg"
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}
