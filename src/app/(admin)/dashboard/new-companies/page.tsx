import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {}

export default async function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard / New companies</Header>
      <div>Some additionl info</div>
    </>
  );
}
