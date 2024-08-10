'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '@/app/components/button';
import { CompanyFormModalProps } from './company-form-modal';

const CompanyFormModal = dynamic(
  () => import('./company-form-modal').then((mod) => mod.CompanyFormModal),
  {
    ssr: false,
  }
) as React.ComponentType<CompanyFormModalProps>;

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      {show && (
        <CompanyFormModal
          onSubmit={console.log}
          show={show}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
}
