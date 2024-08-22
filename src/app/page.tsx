import Header from '@/app/components/header';
import React from 'react';
import Sidebar from '@/app/components/sidebar';

export default function Home() {
  return (
    <main>
      <Sidebar />
      <div className="ml-60">
        <Header>Welcome</Header>
      </div>
    </main>
  );
}
